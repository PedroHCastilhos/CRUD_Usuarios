import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../createUserDTO';
import { UsersService } from 'src/Services/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Post('/cadastrar')
    async create(
        @Body()
        createUserDTO: CreateUserDTO
    ) {
        return await this.usersService.cadastrar(createUserDTO)
    }

    //get

    //put

    //delete
}
