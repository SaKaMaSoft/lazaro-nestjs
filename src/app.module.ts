import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipsController } from './ship/ship.controller';
import { AttractionsController } from './attraction/attraction.controller';
import { ShipsService } from './ship/ship.service';
import { AttractionsService } from './attraction/attraction.service';

@Module({
  imports: [],
  controllers: [AppController, ShipsController, AttractionsController],
  providers: [AppService, ShipsService, AttractionsService],
})
export class AppModule {}
