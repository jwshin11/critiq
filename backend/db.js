import { MongoClient } from 'mongodb'

const mongoDBURL = 'mongodb+srv://root:root@critiq.79ncqi3.mongodb.net/critiq?retryWrites=true&w=majority&appName=Critiq';
let db;

export function connectToDB(cb) {
  MongoClient.connect(mongoDBURL)
    .then((client) => {
      db = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    })
}

export function getDB() {
  return db;
}