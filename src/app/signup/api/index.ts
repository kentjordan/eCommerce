import axios from "axios";
import { CreateUserDto } from "../dto/create-user.dto";


export const signup = (createUser: CreateUserDto) => {
    return axios.post('http://localhost:3001/signup', createUser)
}