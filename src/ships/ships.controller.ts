import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ShipsService } from './ships.service';
import { ShipsDTO } from './ships.entity';

@Controller('ships')
export class ShipsController {
    
    constructor(private readonly shipsService: ShipsService){}

    @ApiResponse({status: 200, description: 'Return all ships'})
    @Get()
    async findAll(): Promise<ShipsDTO> {
      return await this.shipsService.findAll();
    }
}