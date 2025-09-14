import { Module } from '@nestjs/common';
import { UsersService } from '../Services/users.service';
import { UsersController } from '../Controller/users.controller';
import { PrismaService } from '../Services/prisma.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, PrismaService],
})
export class UsersModule {}
