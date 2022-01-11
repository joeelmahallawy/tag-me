import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { user } = getSession(req, res);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(null);
  }
};
export default handler;
