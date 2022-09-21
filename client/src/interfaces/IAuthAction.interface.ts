export interface IAuthAction {
    login: (email: string, password: string) => void;
    logout: () => void;
}