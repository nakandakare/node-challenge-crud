import { Request, Response } from "express";
import cityModel, { ICity } from "../models/City";

// Create and Save a new City
export const createCity = async (req: Request, res: Response) => {
  const { name, country, img } = req.body;

  const newCity: ICity = new cityModel({
    name,
    country,
    img,
  });

  //Verifica si la ciudad ya se encuentra en la base de datos (case insensitive)
  try {
    const foundCity = await cityModel.findOne({ name: name.toLowerCase() });
    if (foundCity) {
      res.json({ message: "This city has already been saved" });
    } else {
      const savedCity = await newCity.save();
      res.json(savedCity);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieve all Cities from the database.
export const findAllCities = async (req: Request, res: Response) => {
  try {
    const cities: ICity[] = await cityModel.find({});
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Find a single City with name
export const findOneCity = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const foundCity = await cityModel.findOne({ name: name.toLowerCase() });
    res.json({foundCity});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a City by the id in the request
export const updateCity = async (req: Request, res: Response) => {};

// Delete a City with the specified id in the request
export const deleteCity = async (req: Request, res: Response) => {};
