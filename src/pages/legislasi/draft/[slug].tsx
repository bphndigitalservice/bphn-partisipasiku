import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  Suspense,
  useState,
} from 'react';
import Container from '@/components/base/Container';
import axiosInstance, {
  axiosMonevFeetcher,
  fetchPrograms,
  fetchTasks,
  taskDetail,
} from '@/lib/legislasirepo';
import Breadcrumb from '@/components/breadcrumb';
import Back from '@/components/back';
import Disqus from '@/components/Disqus';
import { CommendAndShare } from '@/components/layouts/IssueLayout';
import { useDiscussionUrl } from '@/hooks/useDiscussionUrl';
import slugify from '@sindresorhus/slugify';
import {
  Artifact,
  Department,
  Program,
  Regulation,
  Stage,
  RegulationHistory,
  Response,
} from '@/types/model';
import Indicator from '@/components/indicator';
import moment from 'moment/moment';
import 'moment/locale/id';
import Seo from '@/components/seo/Seo';
import { OG_URL } from '@/configs/env';
import useSWR from 'swr';
import FileSaver from 'file-saver';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { truncateSlug } from '@/lib/string';

interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const response = await fetchTasks({ limit: 100 });

  const paths = response.data.data.map((e) => {
    const title = truncateSlug(e.regulation.title);
    return {
      params: { slug: `${e.id}-${title}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const id = slug.split('-')[0];
  const results = await taskDetail(id);
  const histories = await axiosInstance.get<Response<RegulationHistory[]>>(
    `tasks/${id}/history`
  );

  return {
    props: {
      draft: results.data,
      histories: histories.data,
    },
  };
};

export default function DraftPage(
  props: InferGetStaticPropsType<GetStaticProps>
) {
  const router = useRouter();
  const discussionUrl = useDiscussionUrl();

  if (router.isFallback) {
    return (
      <Container>
        <div
          role='status'
          className='max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
        >
          <div className='flex items-center justify-between'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <div className='flex items-center justify-between pt-4'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      </Container>
    );
  }

  const links = [
    { url: '/legislasi', label: 'Program Legislasi' },
    {
      url: `/legislasi/${props.draft.data.program.id}`,
      label: props.draft.data.program.name,
    },
    {
      url: `/legislasi/${props.draft.data.id}`,
      label: props.draft.data.regulation.title,
    },
  ];

  return (
    <div className='relative flex flex-col'>
      <div className='absolute h-[40vh] bg-top inset-0 bg-gradient-to-b from-pink-200/30 dark:from-violet-500/20 to-transparent z-[-1]'></div>
      <Seo
        pageTitle={`${props.draft.data.regulation.title}`}
        description={`${props.draft.data.regulation.title}`}
        title={`${props.draft.data.regulation.title} - ${props.draft.data.program.name}`}
        type='article'
        url={`draft/${props.draft.data.id}/${slugify(
          props.draft.data.regulation.title
        )}`}
        image={`${OG_URL}/api/og?title=${encodeURI(
          props.draft.data.regulation.title
        )}&cat=${encodeURI('Program Legislasi')}`}
      />
      <Container>
        <Breadcrumb links={links} />
      </Container>
      <section className='p-2 lg:p-5'>
        <Container className='flex flex-col gap-2'>
          <Back />
          <p className='max-w-max text-slate-800 dark:text-gray-200 font-[500] text-sm py-1 border-b border-b-slate-800 dark:border-b-gray-200'>
            {props.draft.data.program.name}
          </p>
          <h3 className='text-xl lg:text-3xl font-[600] dark:text-white mb-10'>
            {props.draft.data.regulation.title}
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-[20vh]'>
            <Detail
              department={props.draft.data.department}
              regulation={props.draft.data.regulation}
              program={props.draft.data.program}
              stage={props.draft.data.stage}
              performaceColor={props.draft.data.performance_appearance}
            />
            <Artifacts taskId={props.draft.data.id} />
            <History histories={props.histories.data} />
          </div>

          <CommendAndShare
            url={discussionUrl}
            title={props.draft.data.regulation.label}
            topic={props.draft.data.program.name}
          />
          <Disqus
            id='disqus'
            identifier={`draft/${props.draft.data.id}/${slugify(
              props.draft.data.regulation.title
            )}`}
            title={props.draft.data.regulation.label}
            locale='id-ID'
          />
        </Container>
      </section>
    </div>
  );
}

function Detail({
  regulation,
  department,
  program,
  stage,
  performaceColor,
}: {
  regulation: Regulation;
  program: Program;
  department: Department;
  stage: Stage;
  performaceColor: string;
}) {
  return (
    <div className='border border-gray-300 dark:border-gray-500 rounded-md p-6 flex flex-col gap-2 bg-gray-50 dark:bg-[#111]'>
      <h5 className='text-xl font-bold dark:text-white'>Rincian</h5>
      <div className='flex flex-col gap-1'>
        <span className='font-[600] text-xs text-gray-500 uppercase'>
          Jenis
        </span>
        <span className='font-[400] text-sm'>{regulation.type}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-[600] text-xs text-gray-500 uppercase'>
          Inisiatif
        </span>
        <span className='font-[400] text-sm'>{regulation.initiative}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-[600] text-xs text-gray-500 uppercase'>
          Instansi Pemrakarsa
        </span>
        <span className='font-[400] text-sm'>{department.name}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-[600] text-xs text-gray-500 uppercase'>
          Progres
        </span>
        <Indicator
          label={stage.name}
          color={performaceColor}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-[600] text-xs text-gray-500 uppercase'>
          Dasar Penyusunan
        </span>
        <div
          className='prose prose-sm dark:text-white'
          dangerouslySetInnerHTML={{ __html: regulation.note }}
        ></div>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-[600] text-xs text-gray-500 uppercase'>
          Materi Muatan
        </span>
        <div
          className='prose prose-sm dark:text-white'
          dangerouslySetInnerHTML={{ __html: regulation.material }}
        ></div>
      </div>
    </div>
  );
}

function History({ histories }: { histories: RegulationHistory[] }) {
  return (
    <div className='border hover:border-gray-700 dark:border-gray-200 border-gray-300 dark:border-gray-500 rounded-md p-6 flex flex-col gap-2 bg-gray-50 dark:bg-[#111]'>
      <h5 className='text-xl font-bold dark:text-white'>Rekam Jejak</h5>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        {histories.length <= 0 && (
          <p className='text-black dark:text-gray-500'>
            Tidak ada record sebelumnya.
          </p>
        )}
        {histories.map((e, i) => (
          <li
            className='mb-10 ml-6'
            key={e.id}
          >
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
              <svg
                aria-hidden='true'
                className='w-3 h-3 text-blue-800 dark:text-blue-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
            <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
              {e.stage.name}{' '}
              <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
                Latest
              </span>
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              Diperbarui pada
              {` ` + moment(e.updated_at).fromNow()}
            </time>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              {e.program_name}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Artifacts({ taskId }: { taskId: number | string }) {
  const { data, isLoading, error } = useSWR<{ data: Artifact[] }>(
    `tasks/${taskId}/artifacts`,
    axiosMonevFeetcher
  );

  if (isLoading) {
    return (
      <div
        role='status'
        className='max-w-sm animate-pulse border p-5 rounded-md border-gray-200 dark:border-gray-500'
      >
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }

  return (
    <div className='border border-gray-300 hover:border-gray-700 dark:border-gray-200 dark:border-gray-500 rounded-md p-6 flex flex-col gap-2 bg-gray-50 dark:bg-[#111]'>
      <h5 className='text-xl font-bold dark:text-white'>Dokumen</h5>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
        {data?.data.map((e, i) => (
          <DownloadArtifactButton
            artifact={e}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
}

interface DownloadArtifactButtonProps {
  artifact: Artifact;
}

const DownloadArtifactButton: FunctionComponent<DownloadArtifactButtonProps> = (
  props
) => {
  const downloadFile = () => {
    return axiosInstance
      .get(`artifacts/${artifact.id}/download`, {
        responseType: 'blob',
      })
      .then((res) => {
        FileSaver.saveAs(res.data);
      });
  };

  const { artifact } = props;

  return (
    <div className='bg-white dark:bg-black rounded-md border border-gray-200 dark:border-gray-800 p-2 flex flex-col gap-2'>
      <p className='font-[500] text-blue-500'>{artifact.artifact_type}</p>
      <p className='font-[500] text-xs'>
        diperbarui {moment(artifact.uploaded_at).fromNow()}
      </p>
      <button
        type='button'
        onClick={downloadFile}
        className='px-3 py-2 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-800 dark:hover:bg-slate-900 dark:focus:ring-blue-800'
      >
        Unduh
      </button>
    </div>
  );
};
