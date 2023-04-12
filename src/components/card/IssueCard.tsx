import { FunctionComponent } from 'react';
import Link from 'next/link';
import Card from '@/components/card/Card';
import AdvanceImage from '../image/AdvanceImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/strapi-image';
import DateComponent from '@/components/base/DateComponent';

interface IssueCardProps {
  title: string;
  description: string | null;
  slug: string;
  topic?: string;
  priority?: boolean;
  createdAt: Date;
  cover: {
    url: string;
    publicId: string;
    placeholder: string;
    caption: string;
    altTxt?: string;
  };
}

const IssueCard: FunctionComponent<IssueCardProps> = ({
  title,
  description,
  slug,
  topic,
  cover,
  createdAt,
  priority = false,
}: IssueCardProps) => {
  return (
    <Card
      as={Link}
      href={`/diskusi/${slug}`}
      className='flex flex-col items-start gap-2 p-3 transition duration-200 ease-in-out bg-white rounded-2xl shadow-none cursor-pointer md:flex-col group dark:bg-gray-700/30 ring-1 ring-gray-200 hover:bg-gray-100 dark:ring-gray-900 dark:hover:bg-slate-600/30'
    >
      <span className='block lg:hidden bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
        {topic}
      </span>
      <div className='hidden md:block relative overflow-hidden rounded-md w-[80px] h-[80px] md:w-full md:h-[150px]'>
        <AdvanceImage
          src={`${cover.publicId}`}
          className='object-cover w-full h-full'
          loading={priority ? 'eager' : 'lazy'}
          alt={cover.altTxt ?? title}
          priority={priority}
          width={100}
          height={80}
          blurDataURL={cover.placeholder ?? DEFAULT_PLACEHOLDER}
        />
        <p className='absolute top-3 left-3 rounded-full px-2 py-2 dark:bg-black/30 bg-white/30 backdrop-blur-2xl max-w-max text-[0.8em] '>
          {topic}
        </p>
      </div>
      <div className='flex flex-col justify-between flex-1 w-full px-0 py-1'>
        <div className='flex flex-col gap-1 my-3'>
          <h5 className='text-gray-800  dark:text-white font-[600] text-[1.1em] lg:text-[1.1em] leading-[1.3] -tracking-tight line-clamp-3'>
            {title}
          </h5>
          <p className='text-gray-600 dark:text-zinc-400 font-[300] text-[0.8em] lg:text-[0.83em] leading-[1.3] -tracking-tight line-clamp-3'>
            {description}
          </p>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <DateComponent
            date={createdAt}
            className='items-center text-ellipsis dark:group-hover:bg-gray-700/30  group-hover:bg-gray-200/30 transition duration-100 ease-linear delay-100 rounded-full bg-gray-100 dark:bg-gray-800/30 py-2 px-2'
          />
        </div>
      </div>
    </Card>
  );
};

export default IssueCard;
