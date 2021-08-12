import { response } from "../itinerary.module";
import * as itineraryRepository from "../../../repositories/itinerary.repository";
import * as cityRepository from "../../../repositories/city.repository";
import { IItinerary } from "../../../database/models/Itinerary";
import { getMyComments } from "../../../utils/getMyComments";

/* obtener todos los itinerarios */
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

/* obtener itinerario por ciudad */
export const getByCityName = async (req: any, res = response) => {
  const cityName = req.params.city;

  try {
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

/* obtener itinerario por id de ciudad */
export const getByCityId = async (req: any, res = response) => {
  const cityId = req.params.id;

  try {
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

//Obtener los datos del Usuario de Itinerario
export const checkUser = async (req: any, res = response) => {
  const { id: paramId } = req.params;
  const { user } = req;

  try {
    const itineraryDB: IItinerary | null =
      await itineraryRepository.getItineraryByOne({ _id: paramId });

    if (!itineraryDB) {
      return res.status(400).json({ ok: false, msg: `No itinerary found.` });
    }

    let arrayOwnerCheck = getMyComments(itineraryDB, user._id);

    const likedChek = itineraryDB.usersLike?.includes(user._id);

    res.status(200).json({ success: true, response: { arrayOwnerCheck, likedChek } });

  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};