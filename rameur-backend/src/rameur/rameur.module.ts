import { Module } from '@nestjs/common';
import { RameurService } from './rameur.service';
import { RameurController } from './rameur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RameurSchema } from './schemas/rameur.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rameur', schema: RameurSchema }])
  ],
  providers: [RameurService],
  controllers: [RameurController]
})
export class RameurModule {}
