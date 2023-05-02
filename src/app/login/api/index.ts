import axios from 'axios'
import { ILoginForm, ILoginResponse } from '../types/types';

const SERVER_URL = `http://localhost:3001/login`;

export const login = (data: ILoginForm | unknown) => {
    return axios.post<ILoginResponse>(SERVER_URL, data)
};