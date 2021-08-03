import express, { Application } from "express";
import cors from 'cors';
import citiesRoutes from './routes/cities';
import morgan from 'morgan';

//database
import './database';

const app: Application = express();

//settings
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // Para parsear los requests con JSON
app.use(cors());

//middlewares
app.use(morgan('dev'));

// routes
app.use('/cities', citiesRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("El servidor se está ejecutando en el port: " + port);
});
