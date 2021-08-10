import mongoose from "mongoose";

mongoose
  .connect(process.env.mongoURI || '', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.log (err))