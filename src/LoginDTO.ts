export class LoginDTO {
    @IsEmail()
    @IsNotEmpty()
        email: string;
    @IsNotEmpty()
    @IsString()
        password: string;
}