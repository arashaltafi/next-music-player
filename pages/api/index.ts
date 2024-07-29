import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    message: "Welcome to Next GraphQl",
    document: "http://localhost:3000/document",
  });
}