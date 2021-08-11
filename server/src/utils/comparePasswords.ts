import bcrypt from "bcrypt";

const comparePasswords = async (password: string, passwordDB?: string) => {
  if (passwordDB) {
    return await bcrypt.compare(password, passwordDB);
  }
};

export default comparePasswords;
