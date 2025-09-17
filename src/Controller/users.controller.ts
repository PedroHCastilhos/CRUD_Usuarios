import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../createUserDTO';
import { UsersService } from 'src/Services/users.service';
import { LoginDTO } from 'src/LoginDTO';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Post('/cadastrar')
    async create(
        @Body()
        createUserDTO: CreateUserDTO
    ) {
        //name, email, password
        return await this.usersService.cadastrar(createUserDTO)
    }

    @Post('/login')
    async login(
        @Body()
        loginDTO: LoginDTO
    ) {
        //name, email, password
        return await this.usersService.login(LoginDTO)
    }

    //get

    //put

    //delete
}
