import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  revalidated: boolean;
  message: string;
}

const HEADER_SIGNATURE = 'isr_secret';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { model, id, slug, token } = req.query;

  if (!token) {
    return res.status(401).json({
      message: 'invalid secret',
      revalidated: false,
    });
  }

  if (token === process.env.NEXT_REVALIDATE_SECRET) {
    await res.revalidate('/');

    if (model === 'topic') {
      await res.revalidate('/kategori');
    }

    if (model === 'issue') {
      await res.revalidate('/diskusi');
    }

    return res.status(200).json({
      message: 'ok',
      revalidated: true,
    });
  }

  return res.status(401).json({
    message: 'invalid secret',
    revalidated: false,
  });
}
