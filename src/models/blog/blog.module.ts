import { Blog, BlogSchema } from './schemas/blog.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Blog.name, schema: BlogSchema}])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
