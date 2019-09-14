import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RameurModule } from './rameur/rameur.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/rameur', { useNewUrlParser: true }),
    RameurModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
