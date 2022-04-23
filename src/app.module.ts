import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ElementsModule } from './elements/elements.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/element', {
      connectionName: 'elements',
    }),
    MongooseModule.forRoot('mongodb://localhost/user', {
      connectionName: 'users',
    }),
    ElementsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
