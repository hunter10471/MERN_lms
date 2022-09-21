import { IUser } from './../../interfaces/IUser.interface';
import { IAuthState } from './AuthContext';

interface IUserAuthContext {
    user: IUser;
    loginUser: () => void;
    logout: () => void;

}

