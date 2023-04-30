export interface IRootLayoutArgs {
    children: JSX.Element
}

export type IRootLayout = ({ children }: IRootLayoutArgs) => typeof children
