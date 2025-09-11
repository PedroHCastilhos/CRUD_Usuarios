import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post('/cadastrar')
    create(
        @Body()
        createUserDTO: CreateUserDTO, 
    ) {
        //name, email, password
        return 'Hello World'
    }

    //get

    //put

    //delete
}
