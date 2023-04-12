import React, { Fragment, FunctionComponent, useMemo, useState } from 'react';
import Seo from '@/components/seo/Seo';
import { AppInfo } from '@/configs';
import Container from '@/components/base/Container';
import clsxtw from '@/lib/clsxtw';
import useSWR from 'swr';
import { restFetcher } from '@/lib/fetcher';
import { PendapatKu, PendapatKuResponse } from '@/types/model';
import ReactPaginate from 'react-paginate';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { sliceByWord } from '@/helpers/text';
import Portal from '@/components/base/Portal';
import { motion, AnimatePresence } from 'framer-motion';
import { useOpinionState } from '@/store';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import Link from 'next/link';

export default function Page() {
  return (
    <Fragment>
      <Seo
        image={`${AppInfo.url}/og.jpg`}
        description={AppInfo.siteDescription}
      />
      <Masthead />
      <Container className='flex flex-col gap-10 p-6 md:p-4'>
        <AcceptedIssues />
      </Container>
    </Fragment>
  );
}

const Masthead = () => {
  return (
    <section
      className={clsxtw(
        'relative h-[50vh] inset-0 dark:bg-bottom bg-top bg-no-repeat border-b-slate-500/[0.2] border-b'
      )}
    >
      <div className='flex w-full flex-col items-center justify-center h-full p-4 gap-y-3'>
        <h5 className='w-full p-4 text-5xl font-bold dark:backdrop-blur-none tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 font-body lg:text-[7em]'>
          PendapatKu.
        </h5>
        <h6 className='text-md text-center text-black dark:text-gray-100/80 lg:text-2xl font-[400] tracking-normal'>
          Jangan ragu sampaikan pendapat kalian. Karena pendapat kalian penting
          bagi pembangunan hukum.
        </h6>
        <Link
          href='/pendapatku/compose'
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
        >
          Submit Pendapat
        </Link>
      </div>
    </section>
  );
};

const AcceptedIssues = () => {
  const { selectedOpinion, clearSelectedOpinion } = useOpinionState();
  const MAX_PAGE_SIZE = 12;
  const [page, setPage] = useState<number>(1);
  const url = useMemo(
    () =>
      `pendapat-kus?populate[0]=biodata&pagination[page]=${page}&pagination[pageSize]=${MAX_PAGE_SIZE}&sort[0]=legacyDate&sort[1]=createdAt`,
    [page]
  );
  const { data, error, isLoading } = useSWR<PendapatKuResponse>(
    url,
    restFetcher
  );

  const pageCount = data?.meta.pagination.pageCount!;
  const pageChangeHandler = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  if (data?.data.length! <= 0)
    return (
      <div className='flex flex-col items-center justify-center w-full p-6 h-[300px] border border-gray-100 dark:border-gray-600 rounded-md'>
        <p className='text-lg text-zinc-700 dark:text-white'>Tidak ada entry</p>
      </div>
    );

  return (
    <section className={clsxtw('flex flex-col gap-2')}>
      {isLoading && <PendapatkuSkeleton />}
      {!isLoading && !error && (
        <div>
          <div className='flex flex-col items-center justify-center my-10'>
            <h6 className='text-black dark:text-white font-[300] text-lg lg:text-2xl my-1'>
              Berikut apa yang masyarakat katakan...
            </h6>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data?.data.map((e, i) => (
              <PendapatKuCard
                key={i}
                data={e}
              />
            ))}
          </div>
          <ReactPaginate
            className='inline-flex w-full gap-3 my-5 items-center justify-center'
            pageLinkClassName='block px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-300 transition-color duration-100 ease-in-out'
            activeLinkClassName='bg-blue-500 text-white'
            onPageChange={pageChangeHandler}
            pageRangeDisplayed={5}
            breakLabel='...'
            pageCount={pageCount}
          />
        </div>
      )}
      <AnimatePresence>
        {selectedOpinion && (
          <Portal id='detail-pendapatku-item'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 w-full h-[100vh] z-[999] bg-black/30 backdrop-blur-md'
            ></motion.div>
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 1000 }}
              transition={{ type: 'spring', stiffness: 75, delay: 0.04 }}
              className='fixed z-[9999] w-full lg:w-[80vw] bottom-0 left-0 lg:left-[10vw] flex flex-col items-center justify-start p-4 h-[80vh] overflow-y-scroll bg-white dark:bg-white/10 backdrop-blur-2xl rounded-t-2xl'
            >
              <div className='flex flex-row w-full justify-end gap-2'>
                <button onClick={clearSelectedOpinion}>
                  <CloseIcon />
                </button>
              </div>
              <Container className='relative w-full justify-start items-start flex flex-col gap-6 md:gap-6 md:divide-gray-300'>
                <h2 className='text-2xl lg:text-4xl font-[700] dark:text-white'>
                  {selectedOpinion.attributes.judul}
                </h2>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-600 truncate dark:text-white'>
                    Oleh: {selectedOpinion.attributes.biodata.name}
                  </p>
                  <p className='text-sm text-gray-500 truncate dark:text-gray-400'></p>
                </div>
                <ReactMarkdown
                  className='prose-sm prose-p:font-[300] prose-p:text-justify'
                  remarkPlugins={[remarkGfm]}
                >
                  {selectedOpinion.attributes.pendapat}
                </ReactMarkdown>
              </Container>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </section>
  );
};

const PendapatkuSkeleton = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 animate-pulse'>
      <PendapatKuSkeletonCard />
      <PendapatKuSkeletonCard />
      <PendapatKuSkeletonCard />
      <PendapatKuSkeletonCard />
      <PendapatKuSkeletonCard />
      <PendapatKuSkeletonCard />
    </div>
  );
};

const PendapatKuSkeletonCard = () => {
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-3xl hover:bg-gray-100 dark:bg-black/40 dark:border-gray-700 dark:hover:bg-slate-800'>
      <div className='flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <div className='w-8 h-8 rounded-full bg-gray-100'></div>
        </div>
        <div className='flex-1 min-w-0'>
          <div className='text-sm font-medium text-gray-900 truncate dark:text-white'></div>
          <div className='text-sm text-gray-500 truncate dark:text-gray-400'></div>
        </div>
      </div>
      <div className='mb-2 text-xl my-5 bg-gray-100'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
    </div>
  );
};

const PendapatKuCard: FunctionComponent<{ data: PendapatKu }> = (props) => {
  const { setSelectedOpinion } = useOpinionState();
  const selectedHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedOpinion(props.data);
  };

  return (
    <a
      href='@/pages/index#'
      onClick={selectedHandler}
      className='block max-w-sm p-6 bg-white border border-gray-200 rounded-3xl hover:bg-gray-100 dark:bg-black/40 dark:border-gray-700 dark:hover:bg-slate-800'
    >
      <div className='flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <div className='w-8 h-8 rounded-full bg-gray-100'></div>
        </div>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
            {props.data.attributes.biodata.name}
          </p>
          <p className='text-sm text-gray-500 truncate dark:text-gray-400'></p>
        </div>
      </div>
      <h5 className='mb-2 text-lg my-5 font-[600] tracking-tight text-gray-900 dark:text-white'>
        {props.data.attributes.judul}
      </h5>
      <ReactMarkdown
        className='prose-sm prose-p:font-[350] dark:prose-invert'
        remarkPlugins={[remarkGfm]}
      >
        {sliceByWord(props.data.attributes.pendapat, 150)}
      </ReactMarkdown>
    </a>
  );
};
