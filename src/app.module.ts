import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nest_blog", { useNewUrlParser: true }),
    CategoriesModule,
    PostsModule,
    UsersModule,
    AuthModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
