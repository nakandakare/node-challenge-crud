import { model, Schema, Document, ObjectId } from "mongoose";

export interface IItinerary extends Document {
  _id?: ObjectId;
  title?: string;
  img?: string;
  activities?: [{ name: string, img: string }];
  authorName?: string;
  authorPic?: string;
  price?: number;
  duration?: number;
  likes?: number;
  hashtags?: string[];
  comments?: [{ userId?: ObjectId; text?: string, userName?: string, userPic?: string }];
  usersLike?: string[];
  cityId?: ObjectId;
}

const ItinerarySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  activities: {
    type: [{ name: String, img: String }],
    required: false,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorPic: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  duration: {
    type: Number,
    min: 1,
    required: true,
  },
  likes: {
    type: String,
    default: 0,
  },
  hashtag: {
    type: [String],
  },
  comments: {
    type: [{ userId: {type: Schema.Types.ObjectId, ref: 'User'}, text: String, userName: String, userPic: String}],
  },
  usersLike: {
      type: [ String ],
  },
  cityId: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true
  }
});

export default model<IItinerary>('Itinerary', ItinerarySchema);
