import { response, User } from "../user.module";
import * as userRespository from "../../../repositories/user.repository";
import { IUser } from "database/models/User";
import comparePasswords from "../../../utils/comparePasswords";
import generarJWT from "../../../utils/generarJWT";

export const loginUser = async (req: any, res = response) => {
  const { email, password }: IUser = req.body;

  //Verifica si la cuenta ya se encuentra en la base de datos.
  try {
    const foundUser: IUser | null = await userRespository.getUserByMail(email);

    if (!foundUser) {
      res
        .status(400)
        .json({
          message: `User or password is invalid, please try again.`,
          ok: false,
        });
    }
    const validPassword = await comparePasswords(password, foundUser?.password);

    if (!validPassword) {
      res
        .status(400)
        .json({
          message: `User or password is invalid, please try again.`,
          ok: false,
        });
    }

    const token = await generarJWT( foundUser?.id, foundUser?.firstName, foundUser?.userPic );
    res.status(200).json({ success: true, response: { token, firstName: foundUser?.firstName, userPic: foundUser?.userPic }});
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
