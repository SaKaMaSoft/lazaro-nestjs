import { Test, TestingModule } from '@nestjs/testing';
import { ShipsService } from './ship.service';
import axios from 'axios';


describe('ShipsService', () => {
  let service: ShipsService;
  // jest.mock('axios');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipsService],
    }).compile();

    service = module.get<ShipsService>(ShipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });



});
