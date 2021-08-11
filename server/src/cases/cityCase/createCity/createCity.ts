import { City, response } from "../city.module";
import * as cityRepository from "../../../repositories/city.repository";
import { ICity } from "../../../database/models/City";

// Crea y guarda una nueva ciudad
export const createCity = async (req: any, res = response) => {
  const { name, country, img }: ICity = req.body;

  const newCity: ICity = new City({ name, country, img });

  //Verifica si la ciudad ya se encuentra en la base de datos (case insensitive)
  try {
    const foundCity = await cityRepository.getOneCity({ name: name?.toLowerCase() });
    if (foundCity) {
      res.status(400).json({ message: `The city ${name} is already created`, ok: false });
    } else {
      const savedCity = await newCity.save();
      res.json({ savedCity, ok: true });
    }
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};
