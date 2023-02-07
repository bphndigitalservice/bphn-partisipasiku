import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/card/Card';
import AdvanceImage from '../image/AdvanceImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/strapi-image';

interface IssueCardProps {
  title: string;
  slug: string;
  topic?: string;
  priority?: boolean;
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
  slug,
  topic,
  cover,
  priority = false,
}: IssueCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
    >
      <Card
        as={Link}
        href={`/diskusi/${slug}`}
        className='flex p-3 gap-2 flex-row md:flex-col items-center transition duration-200 ease-in-out cursor-pointer group bg-gray-200/30 dark:bg-gray-700/30 hover:bg-gray-100 dark:ring-gray-900 dark:hover:bg-slate-600/30  rounded-md shadow-none h-full'
      >
        <div className='relative overflow-hidden rounded-md w-[80px] h-[80px] md:w-full md:h-[150px]'>
          <AdvanceImage
            src={`small_${cover.publicId}`}
            className='object-cover w-full h-full'
            loading={priority ? 'eager' : 'lazy'}
            alt={cover.altTxt ?? title}
            priority={priority}
            width={100}
            height={70}
            blurDataURL={cover.placeholder ?? DEFAULT_PLACEHOLDER}
          />
        </div>
        <div className='flex flex-col w-full h-full flex-1 justify-between px-0 py-1'>
          <h5 className='text-gray-800 dark:text-white font-[500] text-[0.9em] leading-[1.4] tracking-normal line-clamp-3'>
            {title}
          </h5>
          <p className='text-[0.7em] text-gray-700 dark:text-gray-300'>
            {topic}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default IssueCard;
