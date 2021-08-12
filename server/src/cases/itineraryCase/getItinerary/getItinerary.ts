import { response } from "../itinerary.module";
import * as itineraryRepository from "../../../repositories/itinerary.repository";
import * as cityRepository from "../../../repositories/city.repository";
import { IItinerary } from "database/models/Itinerary";

export const getAll = async (_req: Request, res = response) => {
  try {
    const itineraries: IItinerary[] | null = await itineraryRepository.getAllItineraries();
    const count: number = await itineraryRepository.countItineraries();

    if (!itineraries || itineraries.length <= 0) {
      return res.status(401).json({
        msg: "No itineraries found",
        ok: false,
      });
    }

    res.status(200).json({
      itineraries,
      total: count,
      ok: true,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};

export const getByCityName = async (req: any, res = response) => {
  try {
    const cityName = req.params.city;
    const cityFound = await cityRepository.getCityByOne({ name: cityName });
    const itinerariesByCity = await itineraryRepository.getItinerariesByCityId(cityFound?._id);

    if (!itinerariesByCity) {
      return res.status(401).json({
        ok: false,
        msg: `There is no itinerary with city name: ${cityName}`,
      });
    }

    res.status(200).json({
      ok: true,
      itinerarios: itinerariesByCity,
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.msg,
    });
  }
};

export const getByCityId = async (req: any, res = response) => {
  try {
    const cityId = req.params.id;
    const cityFound = await cityRepository.getCityByOne({ _id: cityId });
    const itinerariesByCity = await itineraryRepository.getItinerariesByCityId(cityFound?._id);

    if (!itinerariesByCity) {
      return res.status(401).json({
        ok: false,
        msg: `There is no itinerary with city id: ${cityId}`,
      });
    }

    res.status(200).json({
      ok: true,
      response: itinerariesByCity,
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.msg,
    });
  }
};
