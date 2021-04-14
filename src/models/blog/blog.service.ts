import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

    async createBlog(createBlogDto: CreateBlogDto) {
        const createBlog = new this.blogModel(createBlogDto);
        return createBlog.save();
    }

    async getBlogs() {
        return this.blogModel.find().exec();
    }

    async getBlog(id: string) {
        return this.blogModel.findOne({_id: id}).exec();
    }

    async updateBlog(updateBlogDto: UpdateBlogDto) {
        return this.blogModel.updateMany({_id: updateBlogDto.id}, updateBlogDto).exec();
    }

    async deleteBlog(id: string) {
        return this.blogModel.deleteOne({_id: id}).exec();
    }

}
