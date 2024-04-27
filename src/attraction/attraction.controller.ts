import { Controller, Get } from '@nestjs/common';
import { AttractionsService } from './attraction.service';
// import { ApiResponse } from '@nestjs/swagger';
import { AttractionsRO } from './attraction.interface';

@Controller({
  version: '1',
  path: 'attractions'
})
export class AttractionsController {

    constructor(private readonly attractionsService: AttractionsService){}

    //TODO: Implement Swagger
    // @ApiResponse({status: 200, description: 'Return all ships'})
    @Get()
    async findAll(): Promise<AttractionsRO> {
      return await this.attractionsService.findAll();
    }
}
