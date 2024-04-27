import { Test, TestingModule } from '@nestjs/testing';
import { AttractionsController } from './attraction.controller';
import { AttractionsService } from './attraction.service';

describe('AttractionsController', () => {
  let controller: AttractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttractionsController],
      providers: [AttractionsService]
    }).compile();

    controller = module.get<AttractionsController>(AttractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
