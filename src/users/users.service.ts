import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './user.inteface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel("User") private readonly userSchema : Model<IUser>
    ){ }

    async store(user: IUser) : Promise<IUser>{
        try {
            return await this.userSchema.create(user)
        } catch (error) {
            throw  new InternalServerErrorException(error.message)
        }
    }

    async findByEmail  (email: String) : Promise<IUser>{
        try {
            return this.userSchema.findOne({ email }).select("+password")
        } catch (error) {
            throw  new InternalServerErrorException(error.message)
        }
    }
}
