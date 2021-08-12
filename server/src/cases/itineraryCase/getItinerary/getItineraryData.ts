import { response } from "../itinerary.module";
import * as itineraryRepository from "../../../repositories/itinerary.repository";
import { IItinerary } from "database/models/Itinerary";

//Check de Usuario
export const checkUser = async (req: any, res = response) => {
  try {
    const { id: paramId } = req.params;
    const { user } = req;

    const itineraryDB: IItinerary | null =
      await itineraryRepository.getItineraryByOne({ _id: paramId });

    if (!itineraryDB) {
      return res.status(400).json({ ok: false, msg: `No itinerary found.` });
    }

    const arrayOwnerCheck = itineraryDB.comments
    ?.filter((comment) => comment.userId?.toString() === user._id.toString())
    .map(({userId}) => userId);

    const likedChek = itineraryDB.usersLike?.includes(user._id);

    res.status(200).json({ success: true, response: { arrayOwnerCheck, likedChek } });

  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};

//Logica para favoritos de Itinerario
export const likeItinerary = async (req: any, res = response) => {
  try {
    const { id: paramId } = req.params;
    const { user } = req;
    let alreadyLiked: boolean | undefined = false;
    let liked: boolean = false;
    let likes: number =  0;

    const itineraryDB: IItinerary | null =
      await itineraryRepository.getItineraryByOne({ _id: paramId });

    if (!itineraryDB) {
      return res.status(400).json({ ok: false, msg: `No itinerary found.` });
    }

    alreadyLiked = itineraryDB.usersLike?.includes(user._id);
    likes = itineraryDB.usersLike?.length || 0;

    //REFACTOR THIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIS
    if(alreadyLiked) {
      await itineraryRepository.updateOneItinerary({_id: paramId},{"$pull":{"usersLike": user._id }})
      liked = false;
      await itineraryRepository.updateOneItinerary({_id: paramId},{"$set":{"likes": likes - 1 }})
      likes -= 1;
    } else {
      await itineraryRepository.updateOneItinerary({_id: paramId},{"$push":{"usersLike": user._id }})
      liked = true;
      await itineraryRepository.updateOneItinerary({_id: paramId},{"$set":{"likes": likes + 1 }})
      likes += 1;
    }
  
    res.status(200).json({ success: true, response: { likes, liked }});

  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};
