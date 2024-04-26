import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipsController } from './ships/ships.controller';
import { AttractionsController } from './attractions/attractions.controller';
import { ShipsService } from './ships/ships.service';
import { AttractionsService } from './attractions/attractions.service';

@Module({
  imports: [],
  controllers: [AppController, ShipsController, AttractionsController],
  providers: [AppService, ShipsService, AttractionsService],
})
export class AppModule {}
