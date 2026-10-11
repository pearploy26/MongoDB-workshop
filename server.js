const express = require('express');
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'workshop';
const PORT = 3000;

const app = express();
const client = new MongoClient(MONGO_URL);

app.get('/', async (req, res) => {
  const users = await client.db(DATABASE_NAME).collection('users').find().toArray();
  res.json(users);
});

async function main() {
  await client.connect();
  console.log('เชื่อมต่อ MongoDB สำเร็จ');
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}
main().catch(console.error);