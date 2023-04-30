export class CreateUserDto {
    constructor(
        private first_name: string,
        private last_name: string,
        private email: string,
        private password: string,
    ) { }
}