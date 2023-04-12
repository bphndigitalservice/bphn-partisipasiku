import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { Task, Response, ContentIssue } from '@/types/model';
import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  useMemo,
  useState,
} from 'react';
import Container from '@/components/base/Container';
import {
  fetchPrograms,
  programDetail,
  fetchTasks,
  TasksQueryParams,
} from '@/lib/legislasirepo';
import clsxtw from '@/lib/clsxtw';
import Link from 'next/link';
import moment from 'moment/moment';
import 'moment/locale/id';
import SearchBar from '@/components/search-bar';
import slugify from '@sindresorhus/slugify';
import Back from '@/components/back';
import Breadcrumb from '@/components/breadcrumb';
import Seo from '@/components/seo/Seo';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import DraftProgress from '@/components/DraftProgress';
import { truncateSlug } from '@/lib/string';

interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const response = await fetchPrograms();

  const paths = response.data.data.map((e) => {
    return {
      params: { slug: `${e.id}-${slugify(e.name)}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const slugs = slug.split('-');
  if (slugs.length <= 0) {
    return {
      notFound: true,
    };
  }
  const id = slugs[0];
  const resProgram = await programDetail(id);
  const params: TasksQueryParams = {
    program: id,
    limit: -1,
  };

  const results = await fetchTasks(params);

  return {
    props: {
      programId: id,
      program: resProgram.data,
      drafts: results.data,
    },
    revalidate: 50,
  };
};

export default function DraftPage(
  props: InferGetStaticPropsType<GetStaticProps>
) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div
        role='status'
        className='space-y-2.5 animate-pulse max-w-lg'
      >
        <div className='flex items-center w-full space-x-2'>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        </div>
        <div className='flex items-center w-full space-x-2 max-w-[480px]'>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
        </div>
        <div className='flex items-center w-full space-x-2 max-w-[400px]'>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        </div>
        <div className='flex items-center w-full space-x-2 max-w-[480px]'>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
        </div>
        <div className='flex items-center w-full space-x-2 max-w-[440px]'>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
        </div>
        <div className='flex items-center w-full space-x-2 max-w-[360px]'>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80'></div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        </div>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }

  const { program, drafts } = props;

  const links = [
    { url: '/legislasi', label: 'Program Legislasi' },
    {
      url: `/legislasi/${props.programId}/${slugify(props.program.data.name)}`,
      label: props.program.data.name,
    },
  ];

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
          <LegislationTable data={drafts} />
          {/* <Pagination data={drafts.meta} /> */}
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
  const drafts = data.data;
  const { query } = useRouter();
  const label = query.label ?? '';

  const filteredIssue = useMemo((): Task[] => {
    return drafts.filter((draft: Task) =>
      draft.regulation.title.toLowerCase().includes(label.toString())
    );
  }, [drafts, label]);

  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredIssue.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.data.length / itemsPerPage);
  const pageChangeHandler = (selectedItem: { selected: number }) => {
    const newOffset: number =
      (selectedItem.selected * itemsPerPage) % data.data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <SearchBar />
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
            {currentItems.map((e, i) => {
              const title = truncateSlug(e.regulation.title);
              return (
                <tr
                  key={e.id}
                  className='group bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <td className='px-6 py-4'>
                    <div className='flex flex-col gap-2'>
                      <Link
                        href={`/legislasi/draft/${e.id}-${slugify(title)}`}
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
                    <DraftProgress id={e.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        className='inline-flex w-full gap-3 my-5 items-center justify-center'
        pageLinkClassName='block px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-300 transition-color duration-100 ease-in-out'
        activeLinkClassName='bg-black hover:bg-black/30 text-white'
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={5}
        breakLabel='...'
        pageCount={pageCount}
      />
    </>
  );
};

export interface IndicatorProps {
  label: string;
  color: string | null;
}
