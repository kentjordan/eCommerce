export interface ILoginForm {
    email: string;
    password: string;
}

export interface ILoginResponse {
    isAuthenticated: boolean
    [key: string]: any
}