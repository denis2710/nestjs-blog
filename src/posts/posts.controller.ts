import { Controller, Body, Param, Delete, Put, Post, Get, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { IPost } from './post.interface';
import { AuthGuard } from '@nestjs/passport'

@Controller('posts')
export class PostsController {

    constructor(
        private readonly postService: PostsService
    ) { }

    @Get()
    @UseGuards(AuthGuard())
    async index(){
        return await this.postService.findAll()
    }

    @Post()
    @UseGuards(AuthGuard())
    async create(@Body() post: IPost) {
        return await this.postService.create(post)
    }


    @Put("")
    @UseGuards(AuthGuard())
    async update(@Body() post : IPost) {
        return await this.postService.update(post)
    }

    @Delete("/:id")
    @UseGuards(AuthGuard())
    async delete(@Param("id") id: string) {
        return await this.postService.delete(id)
    }


}
