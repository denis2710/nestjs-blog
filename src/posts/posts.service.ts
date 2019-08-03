import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from 'dist/posts/post.interface';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel("Post") private readonly postSchema: Model<IPost>
    ){}

    async findAll() {
        try {
            return await this.postSchema
                                .find()
                                .populate("categories", "name")
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async create(post: IPost): Promise<IPost> {
        try {
            return await this.postSchema.create(post)
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(post: IPost): Promise<IPost> {
        try {
            return await this.postSchema.findByIdAndUpdate({ _id : post._id }, post, { new: true })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete(_id: string): Promise<IPost> {
        try {
            return await this.postSchema.findByIdAndDelete({ _id })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
