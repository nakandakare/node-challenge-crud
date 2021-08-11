import { response } from "../city.module";
import * as cityRepository from "../../../repositories/city.repository";
import { ICity } from "database/models/City";

// Obtener todas las ciudades
export const getAllCities = async (_req: Request, res = response) => {
  try {
    const cities: ICity[] = await cityRepository.getAllCities();
    const count = await cityRepository.countCities();

    if (!cities) {
      return res.status(401).json({
        message: "Error fetching cities",
        ok: false
      });
    }

    res.status(200).json({ total: count, response: cities, ok: true });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};

// Obtener una ciudad por parametro
export const getCitiesById = async (req: any, res = response) => {
  const { id }: ICity = req.params;

  try {
    const foundCity = await cityRepository.getOneCitiesById(id);
    const count = await cityRepository.countCities();

    if (!foundCity) {
      res.status(400).json({ message: "Error fetching city", ok: false });
    }

    res.status(200).json({ total: count, foundCity, ok: true });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};

export const getCityByQuery = async (req: any, res = response) => {
  const { name, country, img }: ICity = req.query;

  //Se puede obtener una ciudad con multiples queries.
  try {
    const cities = await cityRepository.getCitiesByQueries({
      $or: [{ name }, { country }, { img }],
    });
    const count = await cityRepository.countCities();

    if (!cities) {
      return res.status(400).json({ message: "Error while fetching cities", ok: false });
    }

    return res.status(200).json({ total: count, cities, count, ok: true });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};
