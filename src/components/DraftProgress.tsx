import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import moment from 'moment';
import useSWR from 'swr';
import { axiosMonevFeetcher } from '@/lib/legislasirepo';
import { Progres } from '@/types/model';
import clsxtw from '@/lib/clsxtw';

interface DraftProgressProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'id'> {
  id: number | string;
}
const DraftProgress: FunctionComponent<DraftProgressProps> = ({
  id,
  className,
  ...rest
}) => {
  const { data, error, isLoading } = useSWR<Progres>(
    `tasks/${id}/progress`,
    axiosMonevFeetcher
  );

  if (isLoading) {
    return (
      <div
        role='status'
        className='max-w-sm animate-pulse'
      >
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]'></div>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }

  return (
    <div className={clsxtw('w-full flex flex-col gap-2', className)}>
      <p className='text-xs text-blue-500 dark:text-blue-400 lg:text-slate-800 dark:lg:text-white font-[600]'>
        {data?.stage}
      </p>
      <p className='text-xs '>
        diperbarui {moment(data?.updated_at).fromNow()}
      </p>
    </div>
  );
};

export default DraftProgress;
