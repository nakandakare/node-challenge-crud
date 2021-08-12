import mongoose from "mongoose";

mongoose
  .connect(process.env.mongoURI || '', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Connected successfully to MongoDB'))
  .catch(err => console.log (err))