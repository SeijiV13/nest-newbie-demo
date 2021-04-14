import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { BlogModule } from './models/blog/blog.module';
@Module({
  imports: [MongooseModule.
    forRoot(`mongodb+srv://admin:admin@cluster0.l1zps.mongodb.net/minisdb?retryWrites=true&w=majority`), 
  BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
