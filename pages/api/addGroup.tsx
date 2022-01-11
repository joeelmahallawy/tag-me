import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";
import { AddNewGroupInputData } from "../../interfaces";
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newGroupValues: AddNewGroupInputData = await JSON.parse(req.body);
    const query = await prisma.groups.create({
      data: {
        MaxCap: newGroupValues.numberOfMembers,
        Name: newGroupValues.name,
        preferredSocial: newGroupValues.preferredSocialAccount,
        currentNumberOfUsers: 0,
      },
    });

    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export default handler;
