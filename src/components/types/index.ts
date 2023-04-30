import { IRootLayout } from "@/types";

export interface IAuthRouteConfig {
    isRouteSecured: boolean;
}

export interface IAuth {
    (RootComponent: IRootLayout, { isRouteSecured }: IAuthRouteConfig): IRootLayout;
}