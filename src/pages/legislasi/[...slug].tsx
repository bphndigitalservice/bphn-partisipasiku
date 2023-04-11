import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Task, Response } from '@/types/model';
import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import Container from '@/components/base/Container';
import { programDetail, tasks, TasksQueryParams } from '@/lib/legislasirepo';
import clsxtw from '@/lib/clsxtw';
import Link from 'next/link';
import moment from 'moment/moment';
import 'moment/locale/id';
import SearchBar from '@/components/search-bar';
import Pagination from '@/components/pagination';
import slugify from '@sindresorhus/slugify';
import Back from '@/components/back';
import Breadcrumb from '@/components/breadcrumb';
import Seo from '@/components/seo/Seo';
import {
  IP_INTRO,
  PROGSUN_PERPRES,
  PROGSUN_PP,
  PROLEGNAS_LONGLIST,
  PROLEGNAS_PRIORITAS,
} from '@/configs/intro';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const id = query.slug![0];
  const resProgram = await programDetail(id);
  const params: TasksQueryParams = {
    program: id,
  };

  if (query.label) params.label = `${query.label}`;
  if (query.page) params.page = `${query.page}`;

  const results = await tasks(params);

  return {
    props: {
      programId: id,
      program: resProgram.data,
      drafts: results.data,
    },
  };
};

function getIntro(typeCode: string): string {
  switch (typeCode) {
    case 'IP':
      return IP_INTRO;
    case 'RUU':
      return PROLEGNAS_PRIORITAS;
    case 'RUU-L':
      return PROLEGNAS_LONGLIST;
    case 'RPP':
      return PROGSUN_PP;
    case 'RPerpres':
      return PROGSUN_PERPRES;
    default:
      return 'Undefined';
  }
}

export default function DraftPage(
  props: InferGetServerSidePropsType<GetServerSideProps>
) {
  const links = [
    { url: '/legislasi', label: 'Program Legislasi' },
    {
      url: `/legislasi/${props.programId}/${slugify(props.program.data.name)}`,
      label: props.program.data.name,
    },
  ];
  const { program, drafts } = props;
  return (
    <section className='bg-white dark:bg-black p-2 lg:p-5'>
      <Seo
        pageTitle={program.data.name}
        description={`Partisipasi publik ${program.data.name}`}
      />
      <Container className='flex flex-col gap-2'>
        <div className='my-3'>
          <Breadcrumb links={links} />
        </div>
        <Back />
        <h3 className='text-xl lg:text-3xl font-[600] dark:text-white mb-10'>
          {program.data.name}
        </h3>
        <div className='w-full flex flex-col gap-2'>
          <SearchBar />
          <LegislationTable data={drafts} />
          <Pagination data={drafts.meta} />
        </div>
      </Container>
    </section>
  );
}

export interface LegislationTableProps
  extends ComponentPropsWithoutRef<'table'> {
  data: Response<Task[]>;
}

const LegislationTable: FunctionComponent<LegislationTableProps> = ({
  data,
}) => {
  return (
    <div className='relative overflow-x-auto border border-gray-200/50 dark:border-slate-700 rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 tracking-normal w-full lg:w-2/6'
            >
              Judul Rancangan Peraturan
            </th>
            <th
              scope='col'
              className='px-6 py-3 tracking-normal hidden lg:table-cell lg:w-1/6'
            >
              Inisiatif
            </th>
            <th
              scope='col'
              className='px-6 py-3 tracking-normal hidden lg:table-cell lg:w-1/6'
            >
              Instansi Pemrakarsa
            </th>
            <th
              scope='col'
              className='px-6 py-3 tracking-normal hidden lg:table-cell lg:w-1/6'
            >
              Progres
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((e, i) => (
            <tr
              key={e.id}
              className='group bg-white border-b dark:bg-gray-800 dark:border-gray-700'
            >
              <td className='px-6 py-4'>
                <div className='flex flex-col gap-2'>
                  <Link
                    href={`/draft/${e.id}/${slugify(e.regulation.title)}`}
                    className={clsxtw(
                      'font-[600] hover:text-blue-500 text-sm leading-tight text-black break-words whitespace-normal cursor-pointer dark:text-white'
                    )}
                  >
                    {e.regulation.title}
                  </Link>
                  <p className='flex lg:hidden flex-col gap-2'>
                    <span className='text-xs text-slate-800 dark:text-blue-500 font-[600]'>
                      {e.stage.name}
                    </span>
                    <span className='text-xs '>
                      diperbarui {moment(e.updated_at).fromNow()}
                    </span>
                  </p>
                </div>
              </td>
              <td className='px-6 py-4 hidden lg:table-cell'>
                <span className='bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400'>
                  {e.regulation.initiative}
                </span>
              </td>
              <td className='px-6 py-4 hidden lg:table-cell'>
                <p className='text-sm font-[400]'>{e.department.name}</p>
              </td>
              <td className='px-6 py-4 hidden lg:table-cell'>
                <div className='w-full flex flex-col gap-2'>
                  <p className='text-xs text-slate-800 dark:text-white font-[600]'>
                    {e.stage.name}
                  </p>
                  <p className='text-xs '>
                    diperbarui {moment(e.updated_at).fromNow()}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export interface IndicatorProps {
  label: string;
  color: string | null;
}
function Indicator({ label, color }: IndicatorProps) {
  return (
    <span className='flex items-center text-xs font-[400] text-gray-900 dark:text-white'>
      <span
        className='flex w-2.5 h-2.5 rounded-full mr-1.5 flex-shrink-0'
        style={{ backgroundColor: color != null ? color : '#000' }}
      ></span>
      {label}
    </span>
  );
}
