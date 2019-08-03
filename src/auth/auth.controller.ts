import { Controller, Get, Body, Post } from '@nestjs/common';
import { IUser } from 'dist/users/user.inteface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly AuthService : AuthService
    ) { }

    @Post("login")
    async login(@Body() credential : IUser){
        return await this.AuthService.login(credential)
    }

    @Post("register")
    async register(@Body() credentials: IUser) {
        return await this.AuthService.register(credentials)
    }
}
