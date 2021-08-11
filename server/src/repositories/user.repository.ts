import User from '../database/models/User';

export const getAllUsers = async () => await User.find({});
export const getUserByMail = async (email: string) => await User.findOne({email});
export const countUsers = async () => await User.countDocuments();
