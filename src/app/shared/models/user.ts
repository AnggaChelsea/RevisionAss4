import { Role } from './role';

export interface User {
  username: string;
  // nama: string;
  // kelurahan: string;
  // birthdate: Date;
  // phonenumber: number;
  email: string;
  password: string;
  // picture: string;
  // subdistrict: number;
  role: any;
  resetLink: string;
}
