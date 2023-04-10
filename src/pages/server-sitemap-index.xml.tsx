import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { getIssues, getTopics } from '@/lib/content';
import { AppInfo } from '@/configs';
import { fetchPrograms, tasks } from '@/lib/legislasirepo';
import slugify from '@sindresorhus/slugify';
import { Task } from '@/types/model';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const issues = await getIssues({ pagination: { limit: -1 } });
  const topics = await getTopics();
  const programs = await fetchPrograms();
  const drafts = await tasks();

  const fields: ISitemapField[] = issues.data.map((e) => ({
    loc: `${AppInfo.url}/diskusi/${e.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: 'daily',
  }));

  const topicFields: ISitemapField[] = topics.map((e) => ({
    loc: `${AppInfo.url}/kategori/${e.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: 'daily',
  }));

  const programFields: ISitemapField[] = programs.data.data.map((e) => ({
    loc: `${AppInfo.url}/legislasi/${e.id}/${slugify(e.name)}`,
    lastmod: new Date().toISOString(),
    priority: 0.9,
    changefreq: 'daily',
  }));

  const totalPage = drafts.data.meta.last_page;
  const draftFields: ISitemapField[] = drafts.data.data.map((e: Task) => ({
    loc: `${AppInfo.url}/draft/${e.id}/${slugify(e.regulation.title)}`,
    lastmod: new Date().toISOString(),
    priority: 0.9,
    changefreq: 'daily',
  }));
  for (let i = 2; i <= totalPage; i++) {
    const innerDrafts = await tasks({ page: i });
    innerDrafts.data.data.map((e) => {
      draftFields.push({
        loc: `${AppInfo.url}/draft/${e.id}/${slugify(e.regulation.title)}`,
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'daily',
      });
    });
  }

  return getServerSideSitemap(
    ctx,
    fields.concat(topicFields, programFields, draftFields)
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
