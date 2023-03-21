import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import clsxtw from '@/lib/clsxtw';
import styles from './index.module.css';
import TopicCard from '@/components/card/TopicCard';
import Section from '@/components/section';
import { getIssues, getTopics } from '@/lib/content';
import { ContentIssue, ContentTopic } from '@/types/model';
import IssueGrid from '@/components/IssueGrid';
import { AppInfo } from '@/configs';
import * as url from 'url';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues({
    pagination: { limit: 8 },
    sort: ['legacyDate:asc', 'createdAt:desc'],
  });
  const topics = await getTopics({
    pagination: { limit: 6 },
    sort: ['createdAt:desc'],
  });

  return {
    props: {
      issues,
      topics,
    },
    revalidate: 10,
  };
};

export default function Home({
  issues,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Seo
        image={`${AppInfo.url}/og.jpg`}
        description={AppInfo.siteDescription}
      />
      <Masthead />
      <Container className='flex flex-col gap-10 p-6 md:p-4'>
        <HighlightedTopics topics={topics} />
        <HighlightedIssues issues={issues.data} />
      </Container>
    </Fragment>
  );
}

const Masthead = () => {
  return (
    <section
      className={clsxtw(
        'relative h-[60vh] inset-0 dark:bg-bottom bg-top bg-no-repeat border-b-slate-500/[0.2] border-b',
        styles.beams
      )}
    >
      <div className='flex flex-col items-center justify-center h-full p-4 gap-y-3'>
        <h5 className='w-full p-4 text-4xl font-bold tracking-tight text-center text-black font-body dark:text-white lg:text-7xl'>
          Kolaborasi Membangun Hukum.
        </h5>
        <p className='text-md text-center text-gray-500 dark:text-gray-100/80 lg:text-2xl font-[300] tracking-normal'>
          Yuk! Sampaikan pendapatmu terkait isu peraturan perundang-undangan di
          Indonesia 🇮🇩
        </p>
      </div>
    </section>
  );
};

const HighlightedTopics = ({ topics }: { topics: ContentTopic[] }) => {
  return (
    <Section
      sectionTitle='Pilih Kategori.'
      className='py-2 overflow-hidden'
      actionLink='/kategori'
      actionLabel='Lihat Semua'
    >
      <div className='grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-4'>
        {topics.map((e, _) => (
          <TopicCard
            cover={{
              url: e.attachment.url,
              publicId: e.attachment.cloudinaryPublicId,
              placeholder: e.attachment.placeholder,
              altTxt: e.attachment.alternativeText,
              caption: e.attachment.caption,
            }}
            key={e.slug}
            id={e.id}
            name={e.name}
            slug={e.slug}
          />
        ))}
      </div>
    </Section>
  );
};

const HighlightedIssues = ({ issues }: { issues: ContentIssue[] }) => {
  return (
    <Section
      sectionTitle='Topik Terbaru.'
      className='py-2 overflow-hidden'
      actionLink='/diskusi'
      actionLabel='Lihat Semua'
    >
      <IssueGrid
        className="lg:grid-cols-4"
        issues={issues}
      />
    </Section>
  );
};
