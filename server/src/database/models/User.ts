import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName?: string;
  lastName?: string;
  mail?: string;
  password?: string;
  userPic?: string;
  country?: string;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  userPic: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

export default model<IUser>("User", UserSchema);
