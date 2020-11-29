import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "utils/mongodb";

const { MONGODB_DB } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") res.status(400).send("Fuck out!");

  const Mongo = await createConnection();

  try {
    await Mongo.db(MONGODB_DB).collection("users").find({}).toArray();
    res.status(200).send("Connection is fine");
  } catch (err) {
    res.status(500).send("Error occurred");
  } finally {
    await Mongo.close();
  }
}
