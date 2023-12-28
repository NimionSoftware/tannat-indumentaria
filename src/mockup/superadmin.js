import { createHash } from '../components/hashPassword/Hash';

const hashedPassword = createHash("Lalala1234");

export const user = {
  email: "pepe@gmail.com",
  password: hashedPassword
};
