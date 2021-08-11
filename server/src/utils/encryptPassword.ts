import bcrypt from 'bcrypt';

const encryptPassword = async (password: string) => {
   return await bcrypt.hash(password, 10);
}

export default encryptPassword;