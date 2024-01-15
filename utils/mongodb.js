// util/mongodb.js

import { MongoClient } from "mongodb";

const uri = "mongodb+srv://noel:noel1234@cluster0.elysazp.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let database;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);

    await client.connect();
    database = client.db("test");
  }

  return { db: database, client };
}
