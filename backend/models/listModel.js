import mongoose from 'mongoose';

const listSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    books: {
      type: Array
    }
  }
)