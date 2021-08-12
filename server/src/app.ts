import express, { Application } from "express";
import cors from 'cors';
import citiesRoutes from './routes/cities';
import itineraryRoutes from './routes/itinerary';
import userRoutes from './routes/user';
import morgan from 'morgan';
import 'dotenv/config'
import passport from 'passport';
import JWTStrategy from './middleware/passportJWT';

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
app.use(passport.initialize());

//passport strategy
passport.use(JWTStrategy);

// routes
app.use('/api', citiesRoutes);
app.use('/api', itineraryRoutes);
app.use('/api/user', userRoutes);

export default app;