import Axios, { AxiosResponse } from 'axios';
import { EMONEV_API_ENDPOINT, EMONEV_API_KEY } from '@/configs/env';
import { Program, ProgramType, Progres, Response, Task } from '@/types/model';

const axiosInstance = Axios.create({
  baseURL: `${EMONEV_API_ENDPOINT}`,
  headers: {
    Authorization: `Bearer ${EMONEV_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

const TasksQueryParamsMap: Record<string, string> = {
  type: 'programs.program_type_id',
  department: 'department_id',
  year: 'programs.year',
  title: 'regulations.label',
};

export interface TasksQueryParams {
  type?: number | string;
  label?: string;
  program?: number | string;
  department?: number | string;
  year?: number | string;
  page?: number | string;
  limit?: number | string;
}
export const fetchTasks = async (params?: TasksQueryParams) => {
  const urlSearchParams = new URLSearchParams();
  if (params?.year)
    urlSearchParams.set('filter[programs.year]', `${params.year}`);
  if (params?.page) urlSearchParams.set('page', `${params.page}`);
  if (params?.program)
    urlSearchParams.set(`filter[program_id]`, `${params.program}`);
  if (params?.type)
    urlSearchParams.set('filter[programs.program_type_id]', `${params.type}`);
  if (params?.department)
    urlSearchParams.set(`filter[department_id]`, `${params.department}`);
  if (params?.label)
    urlSearchParams.set(`filter[regulations.label]`, `${params.label}`);
  if (params?.limit) urlSearchParams.set('limit', `${params.limit}`);

  return await axiosInstance.get<Response<Task[]>>('tasks', {
    params: urlSearchParams,
  });
};

export const fetchPrograms = async (type?: number) => {
  const searchParams = new URLSearchParams();
  const previousYear = new Date().getFullYear();
  const years = Array.from(Array(2), (_, i) => previousYear - i);
  const filterYears = years.join(',');

  //get last 2 years programs
  searchParams.append('filter[year]', filterYears);

  if (type) searchParams.set(`filter[type]`, `${type}`);
  searchParams.append('sort', '-year');

  return await axiosInstance.get<Response<Program[]>>('programs', {
    params: searchParams,
  });
};

export const programDetail = async (id: number | string) => {
  return await axiosInstance.get<Response<Program[]>>(`programs/${id}`);
};

export const programTypes = async () => {
  return await axiosInstance.get<Response<ProgramType[]>>('types');
};

export const taskDetail = async (id: number | string) => {
  return await axiosInstance.get<Response<Task>>(`tasks/${id}`);
};

export const axiosMonevFeetcher = async (url: string) => {
  return await axiosInstance
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};
