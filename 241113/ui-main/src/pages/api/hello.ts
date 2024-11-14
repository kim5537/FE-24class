// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"; //요청 , 응답

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest, //요청
  res: NextApiResponse<Data> //응답
) {
  res.status(200).json({ name: "John Doe" });
}
