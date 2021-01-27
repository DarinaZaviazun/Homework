export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  address: {
    city: string;
    street: string
  };
}
