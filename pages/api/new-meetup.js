import { MongoClient } from "mongodb";

// POST /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();

    const meetupsCollections = db.collection("meetups");
    const result = await meetupsCollections.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup is added!" });
  }
}

export default handler;
