import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { groupsOf } = req.query;
    const data = await prisma.groups.findMany({
      where: {
        MaxCap: Number(groupsOf),
      },
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export default handler;
