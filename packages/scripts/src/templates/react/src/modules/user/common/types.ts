import type { UserFields } from './enum.ts';

export interface IUser {
  [UserFields.name]: string;
}
