import Itinerary from '../database/models/Itinerary';
import { Condition } from 'mongodb';
import { Schema } from 'mongoose';

export const getAllItineraries = async () => await Itinerary.find({});
export const countItineraries = async () => await Itinerary.countDocuments();
export const getItinerariesByCityId = async (id: Condition<Schema.Types.ObjectId> | undefined) => await Itinerary.find({ cityId: id });
