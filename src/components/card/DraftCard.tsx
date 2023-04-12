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
      href={`/legislasi/${props.program.id}-${slug}`}
      className='flex flex-col items-start gap-2 p-3 transition duration-200 ease-in-out rounded-2xl shadow-none cursor-pointer md:flex-col group bg-[#fafafa] dark:bg-[#111] ring-1 ring-gray-200 hover:bg-gray-100 dark:ring-gray-900 dark:hover:bg-slate-600/30'
    >
      <div className='flex flex-col justify-between flex-1 w-full px-0 py-1'>
        <div className='flex flex-row items-center justify-start gap-5 my-3'>
          <div
            className="bg-white border dark:border-gray-800 dark:bg-black/30 rounded-md p-3 max-w-[70px] flex flex-col gap-1 justify-center items-center"
          >
            <span className="font-[600] text-2xl">
              {props.program.total_task}
            </span>
            <span className="text-[0.7em]">Rancangan</span>
          </div>
          <h5 className='text-gray-800  dark:text-white font-[500] text-[1.1em] lg:text-[1.1em] leading-[1.3] -tracking-tight line-clamp-3'>
            {props.program.name}
          </h5>
        </div>
      </div>
    </Card>
  );
};

export default DraftCard;
