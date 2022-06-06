import bcrypt from "bcryptjs";

export const createPasswordHash = async (password: string): Promise<string> =>
  bcrypt.hash(password, 8);
