import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ShipsService } from './ship.service';
import { ShipsRO } from './ship.interface';
import { QueryShipsFilter } from './ship.entity';

@Controller({
  version: '1',
  path: 'ships'
})
export class ShipsController {

  constructor(private readonly shipsService: ShipsService) { }

  @ApiResponse({ status: 200, description: 'Return all ships' })
  @Get()
  async findAll(@Query() query: QueryShipsFilter): Promise<ShipsRO> {
    return await this.shipsService.findAll();
  }
}
