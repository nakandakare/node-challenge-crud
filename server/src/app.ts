import express, { Application } from "express";
import cors from 'cors';
import citiesRoutes from './routes/cities';
import itineraryRoutes from './routes/itinerary';
import morgan from 'morgan';

//database
import './database-connection';

const app: Application = express();

//settings
app.set('port', 4000 || process.env.PORT);
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // Para parsear los requests con JSON
app.use(cors());

//middlewares
app.use(morgan('dev'));

// routes
app.use('/api', citiesRoutes);
app.use('/itineraries', itineraryRoutes);

export default app;