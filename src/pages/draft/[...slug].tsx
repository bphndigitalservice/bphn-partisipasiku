import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { Suspense } from 'react';
import Container from '@/components/base/Container';
import axiosInstance, { taskDetail } from '@/lib/legislasirepo';
import Breadcrumb from '@/components/breadcrumb';
import Back from '@/components/back';
import Disqus from '@/components/Disqus';
import { CommendAndShare } from '@/components/layouts/IssueLayout';
import { useDiscussionUrl } from '@/hooks/useDiscussionUrl';
import slugify from '@sindresorhus/slugify';
import { Department, Program, Regulation, Stage } from '@/types/model';
import Indicator from '@/components/indicator';
import { RegulationHistory, Response } from '@/types/model';
import moment from 'moment/moment';
import useSWR from 'swr';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const id = query.slug![0];
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
  props: InferGetServerSidePropsType<GetServerSideProps>
) {
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
  const discussionUrl = useDiscussionUrl();
  return (
    <div>
      <Container>
        <Breadcrumb links={links} />
      </Container>
      <section className='bg-white dark:bg-black p-2 lg:p-5'>
        <Container className='flex flex-col gap-2'>
          <Back />
          <p className='max-w-max text-slate-800 dark:text-gray-200 font-[500] text-sm'>
            {props.draft.data.program.name}
          </p>
          <h3 className='text-xl lg:text-3xl font-[600] dark:text-white mb-10'>
            {props.draft.data.regulation.title}
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <Detail
              department={props.draft.data.department}
              regulation={props.draft.data.regulation}
              program={props.draft.data.program}
              stage={props.draft.data.stage}
              performaceColor={props.draft.data.performance_appearance}
            />
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
    <div className='border border-dashed border-gray-300 dark:border-gray-500 rounded-md p-6 flex flex-col gap-2 bg-gray-50 dark:bg-[#111]'>
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
    <div className='border border-dashed border-gray-300 dark:border-gray-500 rounded-md p-6 flex flex-col gap-2 bg-gray-50 dark:bg-[#111]'>
      <h5 className='text-xl font-bold dark:text-white'>Rekam Jejak</h5>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
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
