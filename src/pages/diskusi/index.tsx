import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues } from '@/lib/content';
import { ContentIssue, TopicResponse } from '@/types/model';
import Input from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';
import debounce from 'lodash.debounce';
import IssueGrid from '@/components/IssueGrid';
import ReactPaginate from 'react-paginate';
import { AppInfo } from '@/configs';
import clsxtw from '@/lib/clsxtw';
import { ColorMode } from '@/types';
import useSWR from 'swr';
import { restFetcher } from '@/lib/fetcher';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues({
    pagination: {
      limit: -1,
      start: 0,
    },
    sort: ['legacyDate:desc', 'createdAt:desc'],
  });

  return {
    props: {
      issues,
    },
    revalidate: 10,
  };
};
export default function IssuePage({
  issues,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const filteredIssue = useMemo((): ContentIssue[] => {
    if (selectedTopic !== '')
      return issues.data.filter(
        (issue: ContentIssue) =>
          issue.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          issue.topic === selectedTopic
      );
    return issues.data.filter((issue: ContentIssue) =>
      issue.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [issues, searchValue, selectedTopic]);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const { data, error, isLoading } = useSWR<TopicResponse>(
    `topics`,
    restFetcher
  );
  const debounceQueryChange = debounce(handleQueryChange, 300);

  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredIssue.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredIssue.length / itemsPerPage);
  const pageChangeHandler = (selectedItem: { selected: number }) => {
    const newOffset: number =
      (selectedItem.selected * itemsPerPage) % filteredIssue.length;
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <Seo
        pageTitle='Topik Isu Peraturan Perundang-undangan'
        description='Sampaikan pendapat anda'
        title='Daftar Isu Peraturan Perundang-undangan'
        type='article'
        image={`${AppInfo.url}/api/og?title=${encodeURI(
          'Ayo Berpartisipasi!'
        )}`}
      />
      <Container className='p-6 md:p-4'>
        <motion.h5
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 0.1 }}
          className='my-10 text-2xl font-bold font-body dark:border-none max-w-max'
        >
          Daftar Isu.
        </motion.h5>
        <div className='flex flex-col md:flex-row w-full my-8 gap-2'>
          <Input
            onChange={debounceQueryChange}
            placeholder='Search'
            leftIcon={<SearchIcon />}
            className='flex-1'
          />
          <div
            className={clsxtw(
              'relative flex-row items-center justify-between px-2 py-2 text-sm border border-gray-100 rounded md:flex group dark:border-gray-800'
            )}
          >
            <span className='absolute inline-flex cursor-pointer pointer-events-auto'>
              Filter :
            </span>
            <select
              className='w-full px-12 bg-transparent border-none outline-none appearance-none cursor-pointer font-[300] ring-0 focus-visible:outline-none focus-within:outline-none outline-offset-0 focus:outline-none'
              value={selectedTopic}
              onChange={(evt) => setSelectedTopic(evt.target.value)}
            >
              <option
                key='defaultTopic'
                className='flex flex-row'
                value=''
              >
                Semua
              </option>
              {data?.data.map((e, i) => {
                return (
                  <option
                    key={e.attributes.slug}
                    className='flex flex-row'
                    value={e.attributes.name}
                  >
                    {e.attributes.name}
                  </option>
                );
              })}
            </select>
            <span className='absolute right-0 inline-flex text-gray-500 pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                />
              </svg>
            </span>
          </div>
        </div>
        <IssueGrid
          className="lg:grid-cols-4"
          issues={currentItems}
        />
        <ReactPaginate
          className='inline-flex w-full gap-3 my-5 items-center justify-center'
          pageLinkClassName='block px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-300 transition-color duration-100 ease-in-out'
          activeLinkClassName='bg-blue-500 text-white'
          onPageChange={pageChangeHandler}
          pageRangeDisplayed={5}
          breakLabel='...'
          pageCount={pageCount}
        />
      </Container>
    </Fragment>
  );
}
