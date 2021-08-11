import { response } from "../user.module";
import * as userRespository from "../../../repositories/user.repository";

export const getAllUsers = async (_req: Request, res = response) => {
  try {
    const usersDB = await userRespository.getAllUsers();
    const count = await userRespository.countUsers();

    if (!usersDB || usersDB.length <= 0) {
      return res.status(401).json({
        msg: "No itineraries found",
        ok: false,
      });
    }

    res.status(200).json({
      total: count,
      ok: true,
      usersDB,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, ok: false });
  }
};
