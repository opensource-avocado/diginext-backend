export interface UserInterface {
  id?: string;

  username: string;
  email: string;
  password: string;

  createdAt?: Date;
  updatedAt?: Date;
}
