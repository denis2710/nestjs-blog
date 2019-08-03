import * as mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
    fullname: string,
    email: string,
    password: string
}