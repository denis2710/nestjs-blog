import * as mongoose from 'mongoose'
import { ObjectID } from 'bson';
import { ICategory } from 'dist/categories/category.interface';
export interface IPost extends mongoose.Document {
    id?: ObjectID,
    title: string,
    description: string,
    category: [ObjectID]
}