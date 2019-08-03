import { Controller, Get, Put, Body, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Mongoose, Model } from 'mongoose';
import { ICategory } from './category.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoryService: CategoriesService
    ) { }

    @Get()
    @UseGuards(AuthGuard())

    async index(){
        return await this.categoryService.findAll()
    }

    @Post()
    @UseGuards(AuthGuard())
    async create(@Body() category: ICategory) {
        return await this.categoryService.create(category)
    }


    @Put("")
    @UseGuards(AuthGuard())
    async update(@Body() category : ICategory) {
        return await this.categoryService.update(category)
    }

    @Delete("/:id")
    @UseGuards(AuthGuard())
    async delete(@Param("id") id: string) {
        return await this.categoryService.delete(id)
    }


}
