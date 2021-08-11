import jwt from "jsonwebtoken";
import { ObjectID } from "mongodb";

const generarJWT = async (
  id?: ObjectID,
  username?: string,
  avatarPicture?: string
) => {
  return new Promise((resolve, reject) => {
    const payload = { id, username, avatarPicture };

    jwt.sign(payload, process.env.secretOrKey || "", (err, token) => {
      if (err) {
        reject("There was an error with jwt");
      } else {
        resolve(token);
      }
    });
  });
};

export default generarJWT;
