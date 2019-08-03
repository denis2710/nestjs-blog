import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from './category.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectModel("Category") private readonly categorySchema: Model<ICategory>
    ){}

    async findAll() {
        try {
            return await this.categorySchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async create(category: ICategory): Promise<ICategory> {
        try {
            return await this.categorySchema.create(category)
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(category: ICategory): Promise<ICategory> {
        try {
            return await this.categorySchema.findByIdAndUpdate({ _id : category._id }, category, { new: true })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete(_id: string): Promise<ICategory> {
        try {
            return await this.categorySchema.findByIdAndDelete({ _id })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
