import axios from 'axios'
import { ILoginForm, ILoginResponse } from '../types/types';

export const login = (data: ILoginForm | unknown) => {
    return axios.post<ILoginResponse>("http://localhost:3001/login", data)
};