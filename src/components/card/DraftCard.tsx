import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import AdvanceImage from '@/components/image/AdvanceImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/strapi-image';
import DateComponent from '@/components/base/DateComponent';
import Card from '@/components/card/Card';
import { Program } from '@/types/model';
import slugify from '@sindresorhus/slugify';

export interface DraftProps {
  program: Program;
}

const DraftCard: FunctionComponent<DraftProps> = (props) => {
  const slug = useMemo(() => {
    return slugify(props.program.name);
  }, [props.program]);

  return (
    <Card
      as={Link}
      href={`/legislasi/${props.program.id}/${slug}`}
      className='flex flex-col items-start gap-2 p-3 transition duration-200 ease-in-out bg-white rounded-2xl shadow-none cursor-pointer md:flex-col group dark:bg-gray-700/30 ring-1 ring-gray-200 hover:bg-gray-100 dark:ring-gray-900 dark:hover:bg-slate-600/30'
    >
      <div className='flex flex-col justify-between flex-1 w-full px-0 py-1'>
        <div className='flex flex-col gap-1 my-3'>
          <h5 className='text-gray-800  dark:text-white font-[600] text-[1.1em] lg:text-[1.1em] leading-[1.3] -tracking-tight line-clamp-3'>
            {props.program.name}
          </h5>
          <p className='text-violet-800 dark:text-zinc-400 font-[600] text-lg leading-[1.3] -tracking-tight line-clamp-3'>
            {props.program.total_task} <i>Drafts</i>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DraftCard;
