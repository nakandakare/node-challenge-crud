import mongoose from "mongoose";
//@ts-ignore
import { KEYS } from "../keys";

mongoose
  .connect(KEYS.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.log (err))