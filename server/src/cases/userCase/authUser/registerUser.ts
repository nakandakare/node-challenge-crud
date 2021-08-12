import { response, User } from "../user.module";
import * as userRespository from "../../../repositories/user.repository";
import { IUser } from "database/models/User";
import encryptPassword from "../../../utils/encryptPassword";
import generarJWT from "../../../utils/generarJWT";

export const registerUser = async (req: any, res = response) => {
  const { firstName, lastName, email, password, userPic, country }: IUser =
    req.body;

  try {
    //Verifica si la cuenta ya se encuentra en la base de datos.
    const foundUser = await userRespository.getUserByMail(email);
    if (foundUser) {
      res
        .status(400)
        .json({
          message: `The account ${email} is already in use`,
          success: false,
        });
    } else {
      const hash = await encryptPassword(password);
      const newUser: IUser = new User({
        firstName,
        lastName,
        email,
        password: hash,
        userPic,
        country,
      });

      const { id: savedId, firstName: savedFirstName, userPic: savedUserPic } = await newUser.save();

      const token = await generarJWT(savedId, savedFirstName, savedUserPic);

      res.json({
        response: { token, firstName: savedFirstName, userPic: savedUserPic },
        success: true,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};
