import { model, Schema, Document } from "mongoose";

export interface ICity extends Document {
  name?: string;
  country?: string;
  img?: string;
}

const citySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    lowercase: true,
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  img: {
    type: String,
    required: [true, 'Image is required'],
  },
});

export default model<ICity>('City', citySchema);
