import { IUser } from './IUser.interface';
export interface ILoginResponse {
    user: IUser;
    token: string;
}