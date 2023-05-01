import { IRootLayout, IRootLayoutArgs } from "@/types";
import { FunctionComponent } from 'react'

export interface IRouteConfig {
    isRouteSecured: boolean;
}

export interface IWithAuthentication {
    (RootComponent: IRootLayout, { isRouteSecured }: IRouteConfig): FunctionComponent<IRootLayoutArgs>;
}