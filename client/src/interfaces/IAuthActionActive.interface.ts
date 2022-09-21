import { IUser } from './IUser.interface';
import { IAuthAction } from './IAuthAction.interface';
export interface AuthAction {
    type: IAuthAction;
    payload?: {
        user: IUser,
        error: string;
    }
}