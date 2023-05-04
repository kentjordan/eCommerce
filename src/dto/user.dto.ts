export class User {
    constructor(
        public email: string,
        public first_name: string,
        public last_name: string,
        public cart_items: unknown[],
        public orders: unknown[],
        public gender: number,
    ) { }
}