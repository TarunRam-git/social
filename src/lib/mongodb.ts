import { MongoClient } from "mongodb";

// Your MongoDB connection string
const uri = process.env.MONGODB_URI as string;
const options = {};

// Type adapters
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Validate URI presence
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// In development, cache the connection on the global object
if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  clientPromise = globalWithMongo._mongoClientPromise!;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDB() {
  const client = await clientPromise;
  const db = client.db(); // Default DB from URI (or override manually)
  return { client, db };
}
