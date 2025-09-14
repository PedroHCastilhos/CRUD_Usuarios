import { CreateUserDTO } from "src/createUserDTO";
import { Login } from "../user";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "./prisma.service";

export class UsersService {
    constructor(private prisma: PrismaService){}
    async cadastrar(payload: CreateUserDTO): Promise<Login> {
        const hash = await this.criptografarPassword(payload.password, 10);
        payload.password = hash;
        return this.prisma.user.create({
            data: payload,
            select: {
                email: true,
                id: true,
            }
        })
        
    }

    async criptografarPassword(plainText, saltRounds) {
        return await bcrypt.hash(plainText, saltRounds);
    }
}