import type { NextApiRequest, NextApiResponse } from "next";
//NextApiResponse = 값을 전달

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date();
  res.status(200).json({
    time: date.toLocaleString(),
  });
};

export default handler;
