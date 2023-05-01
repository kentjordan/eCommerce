import { ILoginResponse } from "@/app/login/types/types";

export interface IAuthRedirectionConfig {
    isRouteSecured?: boolean;
    isAuthenticated: boolean;
    redirectDelay: number;
    redirectTo: string;
    response?: ILoginResponse;
}

export type IUseAuthRedirection = ({
    isRouteSecured,
    isAuthenticated,
    redirectDelay,
    redirectTo,
    response,
}: IAuthRedirectionConfig) => void;