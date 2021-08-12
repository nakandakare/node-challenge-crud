import { response } from "../itinerary.module";
import * as itineraryRepository from "../../../repositories/itinerary.repository";
import { IItinerary } from "../../../database/models/Itinerary";
import { getMyComments } from "../../../utils/getMyComments";

//Logica para favoritos de Itinerario
export const likeItinerary = async (req: any, res = response) => {
  const { id: paramId } = req.params;
  const { _id: userId } = req.user;

  try {
    const itineraryToLike: IItinerary | null =
      await itineraryRepository.getItineraryByOne({ "_id": paramId, "usersLike": userId });

    let filter: string = itineraryToLike ? '$pull' : '$push';
    let liked: boolean = itineraryToLike ? false : true;
  
    let itineraryLiked: any = await itineraryRepository.findAndUpdateOneItinerary({ "_id": paramId }, { [filter]: { 'usersLike': userId } }, { new: true });

    let likesFromDb: number = parseInt(itineraryLiked.likes);

    let itineraryModified: any = await itineraryRepository.findAndUpdateOneItinerary({ "_id": paramId }, { $set: { "likes": likesFromDb += liked ? 1 : -1 }}, { new: true });
   
    res.status(200).json({ success: true,  response: { likes: itineraryModified?.likes, liked  } });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};

//Logica para comentar en el Itinerario
export const commentItinerary = async (req: any, res = response) => {
  const { id: paramId } = req.params;
  const { user } = req;
  const { text } = req.body;

  try {
    const updatedItinerary: any = await itineraryRepository.findAndUpdateOneItinerary(
      {_id: paramId}, 
      { "$push": { "comments" : { text, userId: user._id, userName: user.firstName, userPic: user.userPic }}}, 
      { new: true });

    let arrayOwnerCheck = getMyComments(updatedItinerary, user._id);

    res.status(200).json({ success: true, response: updatedItinerary?.comments, arrayOwnerCheck });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};


//Logica para editar el comentario en el Itinerario
export const editComment = async (req: any, res = response) => {
  const { id: commentId } = req.params;
  const { text } = req.body;
  const { _id: userId } = req.user;
  try {
    const itineraryDB: IItinerary | null = await itineraryRepository.getItineraryByOne({ "comments._id": commentId, "comments.userId": userId });

    if(!itineraryDB) {
      res.status(500).json({ message: `You can't edit this comment`, ok: false });
    }
  
    const updatedItinerary: any = await itineraryRepository.findAndUpdateOneItinerary(
      {"comments._id": commentId}, 
      { $set: { "comments.$.text" : text }}, 
      { new: true });
    
    res.status(200).json({ success: true, response: updatedItinerary.comments });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};

//Logica para borrar el comentario en el Itinerario
export const deleteComment = async (req: any, res = response) => {
  const { id: commentId } = req.params;
  const { _id: userId } = req.user;

  try {
    const itineraryDB: IItinerary | null = await itineraryRepository.getItineraryByOne({ "comments._id": commentId, "comments.userId": userId });

    if(!itineraryDB) {
      res.status(500).json({ message: `You can't edit this comment`, ok: false });
    }
  
    const updatedItinerary: any = await itineraryRepository.findAndUpdateOneItinerary(
      { "comments._id": commentId }, 
      { $pull: { "comments" : { '_id': commentId } }}, 
      { new: true });

    res.status(200).json({ success: true, response: updatedItinerary.comments });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};