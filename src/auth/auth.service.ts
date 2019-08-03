import { Injectable, UnauthorizedException, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../users/user.inteface';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async login(credentials: IUser):Promise<any>{
        const user = await this.userService.findByEmail(credentials.email)

        if(!user){
            throw new UnauthorizedException();
        }

        if(await !bcrypt.compare(credentials.password, user.password)){
            throw new UnauthorizedException();
        }

        const payload = {
            id: user.id,
            fullname: user.fullname,
            email: user.email
        }

        const token = this.jwtService.sign(payload)

        return {token}

     }
    async register( credentials: IUser):Promise<any>{
        if(await this.userService.findByEmail(credentials.email)){
            throw new ConflictException();
        }

        try {

            const user = await this.userService.store(credentials)
            const payload = {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }

            const token = this.jwtService.sign(payload)

            return { token }

        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
     }
    async validateUser(user: IUser):Promise<IUser>{
        try {
            return await this.userService.findByEmail(user.email)
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
