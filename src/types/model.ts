import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type ContentIssue = {
  id: string;
  title: string;
  description: string;
  topic: string;
  slug: string;
  cover: ContentImage;
  meta: ContentMeta;
  markdown: MDXRemoteSerializeResult;
  createdAt: Date;
};

export type ContentIssues = {
  data: ContentIssue[];
  pagination: {
    page: number | string;
    pageCount: number | string;
    pageSize: number | string;
    total: number | string;
  };
};

export type ContentMeta = {
  description: string;
  title: string;
  og?: string | undefined;
};

export type ContentImage = {
  url: string;
  coverUrl: string;
  placeholder: string;
  caption: string;
  alternativeText: string;
  cloudinaryPublicId: string;
};

export type ContentTopic = {
  id: string;
  description: string;
  background: MDXRemoteSerializeResult;
  name: string;
  slug: string;
  createdAt: Date;
  publishedAt: Date;
  attachment: ContentImage;
};

export type ViewCountResponse = {
  data: [
    {
      id: number;
      attributes: {
        issue: number;
        count: number;
      };
    }
  ];
};

export type Biodata = {
  name: string;
  email: string;
  onbehalf: string;
  pekerjaan: string;
  instansi: string;
};

export type PendapatKu = {
  id: number;
  attributes: {
    judul: string;
    pendapat: string;
    response: string;
    attachment: string;
    biodata: Biodata;
    legacyDate: Date;
    createdAt: Date;
  };
};

export type PendapatKuResponse = {
  data: [PendapatKu];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};

export type Topic = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};

export type TopicResponse = {
  data: [Topic];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};

export interface Response<T> {
  data: T;
  links: Links;
  meta: Meta;
}

export interface Links {
  first: string;
  last: string;
  prev: any;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface Program {
  id: number;
  name: string;
  type_code: string;
  type_desc: string;
  year: string;
  total_task: number;
}

export interface Task {
  id: number;
  type: string;
  program: Program;
  department: Department;
  regulation: Regulation;
  history: RegulationHistory[];
  stage: Stage;
  performance_appearance: string;
  performance_statement: string;
  created_at: string;
  updated_at: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface ProgramType {
  id: number;
  uuid: string;
  type: string;
  label: string;
  desc: string;
}

export interface Regulation {
  id: number;
  type: string;
  title: string;
  material: string;
  note: string;
  initiative: string;
}

export interface RegulationHistory {
  id: number;
  type: string;
  title: string;
  material: string;
  note: string;
  initiative: string;
  year: string;
  program_name: string;
  stage: Stage;
  updated_at: string;
}

export interface Stage {
  id: number;
  name: string;
}
