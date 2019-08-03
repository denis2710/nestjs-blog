import { ObjectID } from "bson";
import * as mongoose from 'mongoose'

export interface ICategory extends mongoose.Document {
    id?: ObjectID
    name: string
}