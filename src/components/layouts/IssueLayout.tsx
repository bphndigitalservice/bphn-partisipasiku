import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import SmoothTransitionImage from '@/components/image/SmoothTransitionImage';
import { ArrowSmallLeftIcon, CalendarDays } from '@/components/icons';
import Markdown from '@/components/markdown/Markdown';
import { DEFAULT_PLACEHOLDER } from '@/lib/image';
import Link from 'next/link';

type IssueProps = {
  title: string;
  description: string;
  slug: string;
  topic: string;
  cover: {
    url: string;
    placeholder: string;
    caption?: string;
    alternateText: string;
  };
  markdownContent: MDXRemoteSerializeResult;
  createdAt: string;
};

const IssueLayout: FunctionComponent<IssueProps> = ({
  title,
  slug,
  description,
  topic,
  cover,
  markdownContent,
  createdAt,
}) => {
  return (
    <Container className='relative flex flex-col md:gap-6 md:divide-gray-300 gap-6'>
      <Seo
        pageTitle={title}
        description={description}
        title={title}
        type='article'
        url={`isu/${slug}`}
      />
      <div className='flex flex-col'>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex flex-col py-5 gap-2'>
            <Link
              href='/isu'
              className='text-gray-400 inline-flex max-w-max items-center text-sm hover:text-gray-800 dark:hover:text-white transition-colors duration-200 ease-in-out'
            >
              <ArrowSmallLeftIcon className='w-5 h-4' />
              <span>Kembali</span>
            </Link>
            <div>
              <h6 className='text-blue-500 font-[600] font-heading text-md lg:text-2xl'>
                {topic}
              </h6>
              <h5 className='text-3xl  lg:text-4xl lg:text-[4em] font-[700] font-heading leading-tight lg:leading-[1]'>
                {title}
              </h5>
            </div>
            <div className='flex flex-row'>
              <p className='inline-flex gap-2 justify-center items-center'>
                <CalendarDays />
                <span className='text-sm dark:text-gray-400'>{createdAt}</span>
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='w-full flex flex-col gap-6'>
              <figure className='relative aspect-video'>
                <SmoothTransitionImage
                  src={cover.url}
                  fill={true}
                  alt={cover.alternateText ?? title}
                  blurDataURL={cover.placeholder}
                  className='object-cover rounded-md'
                />
                {cover.caption && <figcaption>{cover.caption}</figcaption>}
              </figure>
              <Markdown
                mdx={markdownContent}
                className='prose-md font-body w-full lg:w-1/2 mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IssueLayout;
