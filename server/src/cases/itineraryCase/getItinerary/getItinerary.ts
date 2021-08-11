import { response } from "../itinerary.module";
import * as itineraryRepository from "../../../repositories/itinerary.repository";
import * as cityRepository from "../../../repositories/city.repository";

export const getAll = async (_req: Request, res = response) => {
  try {
    const itineraries = await itineraryRepository.getAllItineraries();
    const count = await itineraryRepository.countItineraries();

    if (!itineraries || itineraries.length <= 0) {
      return res.status(401).json({
        msg: "No itineraries found",
        ok: false
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

