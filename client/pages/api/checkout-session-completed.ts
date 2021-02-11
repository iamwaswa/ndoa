import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await Promise.resolve(
    ((): void => {
      console.log(req.body);
    })()
  );

  res.status(200).json(req.body);
}
