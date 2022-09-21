import { IUser } from './IUser.interface';
export interface IAuthState {
    user: IUser | null | undefined;
    initialLoading: boolean;
    isLoggingIn: boolean;
    loginError: string;
}