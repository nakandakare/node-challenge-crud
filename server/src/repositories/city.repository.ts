import City, { ICity } from "../database/models/City";
import { FilterQuery } from "mongoose";

export const getAllCities = async () => await City.find();
export const getOneCity = async (queries: FilterQuery<ICity>) => await City.findOne(queries);
export const getOneCitiesById = async (id: number) => await City.findById(id);
export const getCitiesByQueries = async (queries: FilterQuery<ICity>) => await City.find(queries);
export const countCities = async () => await City.countDocuments();