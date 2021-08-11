import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userPic: string;
  country: string;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userPic: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

export default model<IUser>("User", UserSchema);
