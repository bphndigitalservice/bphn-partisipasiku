import React, { Fragment, FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import clsxtw from '@/lib/clsxtw';
import { Response, Program } from '@/types/model';
import DraftCard from '@/components/card/DraftCard';
import { fetchPrograms } from '@/lib/legislasirepo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '@/configs/animation';

export async function getStaticProps() {
  const result = await fetchPrograms();
  const data = result.data;

  return {
    props: {
      programs: data,
    },
    revalidate: 10,
  };
}

export default function LegislasiPage(
  props: InferGetServerSidePropsType<GetServerSideProps>
) {
  return (
    <Fragment>
      <Seo
        pageTitle='Program Legislasi'
        description='Daftar Program legislasi yang dapat anda tanggapi.'
      />
      <Masthead />
      <Container className='flex flex-col gap-10 p-6 md:p-4'>
        <Drafts program={props.programs} />
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
          Program Legislasi
        </h5>
        <h6 className='text-md text-center text-black dark:text-gray-100/80 lg:text-2xl font-[280] tracking-wide'>
          Pantau dan sampaikan pendapat anda terkait progres pembentukan
          peraturan perundang-undangan di Indonesia.
        </h6>
      </div>
    </section>
  );
};

const Drafts: FunctionComponent<{ program: Response<Program[]> }> = (props) => {
  return (
    <motion.div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
      {...staggerAnimationProps}
    >
      {props.program.data.map((e, i) => (
        <motion.div
          key={e.id}
          {...childAnimationProps}
        >
          <DraftCard program={e} />
        </motion.div>
      ))}
    </motion.div>
  );
};
