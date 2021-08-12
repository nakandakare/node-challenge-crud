import { response, Itinerary } from "../itinerary.module";
import * as itineraryRepository from "../../../repositories/itinerary.repository";
import { IItinerary } from "database/models/Itinerary";

export const createItinerary = async (req: any, res = response) => {
  const { title, img, authorName, authorPic, price, duration, likes, hashtags, cityId, comments, usersLike }: IItinerary = req.body;

  try {
    //Verifica si la cuenta ya se encuentra en la base de datos.
    const foundItinerary = await itineraryRepository.getItineraryByOne({
      title,
    });
    if (foundItinerary) {
      res.status(400).json({
        message: `This itinerary ${title} is already created`,
        ok: false,
      });
    } else {
      //algunos datos van a estar seteados por default.
      const newItinerary: IItinerary = new Itinerary({
        title,
        img,
        authorName,
        authorPic,
        price,
        duration,
        likes,
        cityId,
        hashtags,
        comments,
        usersLike,
      });

      const createdItinerary = await newItinerary.save();

      res.json({ ok: true, createdItinerary });
    }
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};
