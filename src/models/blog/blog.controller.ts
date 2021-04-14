import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';

@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService){}

    @Post()
    createBlog(@Body() createBlogDto: CreateBlogDto) {
        return this.blogService.createBlog(createBlogDto);
    }

    @Get("/all")
    getBlogs() {
        return this.blogService.getBlogs();
    }

    @Get(":id")
    getBlog(@Param() param) {
        return this.blogService.getBlog(param.id);
    }

    @Put()
    updateBlog(@Body() updateBlogDto: UpdateBlogDto) {
        return this.blogService.updateBlog(updateBlogDto);
    }

    @Delete(":id")
    deleteBlog(@Param() param) {
        return this.blogService.deleteBlog(param.id);
    }



}
