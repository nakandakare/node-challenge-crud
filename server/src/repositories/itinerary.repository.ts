import Itinerary, { IItinerary } from '../database/models/Itinerary';
import { Condition } from 'mongodb';
import { FilterQuery, Schema, UpdateQuery } from 'mongoose';

export const getAllItineraries = async () => await Itinerary.find({});
export const countItineraries = async () => await Itinerary.countDocuments();
export const getItinerariesByCityId = async (id: Condition<Schema.Types.ObjectId> | undefined) => await Itinerary.find({ cityId: id });
export const getItineraryByOne = async (value: FilterQuery<IItinerary>) => await Itinerary.findOne(value);
export const updateOneItinerary = async(filter: FilterQuery<IItinerary>, update: UpdateQuery<IItinerary | undefined>) => await Itinerary.updateOne(filter, update);