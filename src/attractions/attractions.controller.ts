import { Controller, Get } from '@nestjs/common';
import { AttractionsService } from './attractions.service';
import { ApiResponse } from '@nestjs/swagger';
import { AttractionsRO } from './attractions.interface';

@Controller('attractions')
export class AttractionsController {

    constructor(private readonly attractionsService: AttractionsService){}

    @ApiResponse({status: 200, description: 'Return all ships'})
    @Get()
    async findAll(): Promise<AttractionsRO> {
      return await this.attractionsService.findAll();
    }
}
