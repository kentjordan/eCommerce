import { ILoginResponse } from "@/app/login/types/types";

export interface IAuthRedirection {
    isRouteSecured?: boolean;
    isAuthenticated: boolean;
    redirectDelay: number;
    redirectTo: string;
    response?: ILoginResponse;
}

export type IDependencies = Array<unknown> | undefined

export type IUseAuthrRedirection = (arg0: IAuthRedirection, arg1?: IDependencies) => void;