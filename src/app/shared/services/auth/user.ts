export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  // roles: Roles;
}
