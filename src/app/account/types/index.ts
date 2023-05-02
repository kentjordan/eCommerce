import { User } from "@/dto/user.dto";

interface IResponse {
    [any: string]: any,
    user: User,
    isAuthenticated: boolean,
}

export interface IUserReducerState extends IResponse { }

