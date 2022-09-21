import { IUser } from './../../interfaces/IUser.interface';
import { createContext, useEffect, useReducer } from 'react';

export interface IAuthState{
    user: IUser | null;
    isFetching: boolean;
    error: boolean;
}

const INITIAL_STATE: IAuthState = {
    user: JSON.parse(localStorage.getItem('user') || '') || null,
    isFetching: false,
    error: false,
}

export const AuthContext = createContext( INITIAL_STATE );

