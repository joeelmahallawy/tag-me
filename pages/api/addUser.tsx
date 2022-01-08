import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    prisma.groups.create({
      data: {
        MaxCap: 9,
        Users: {},
      },
    });

    const data = await JSON.parse(req.body);
    await prisma.user.create({
      data: {
        ...data,
      },
    });
    //
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
export default handler;
