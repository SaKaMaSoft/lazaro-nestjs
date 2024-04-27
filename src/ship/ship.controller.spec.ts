import { Test, TestingModule } from '@nestjs/testing';
import { ShipsController } from './ship.controller';
import { ShipsService } from './ship.service';
import { QueryShipsFilter } from './ship.entity';

describe('ShipsController', () => {
  let controller: ShipsController;
  let service: ShipsService;

  const ShipsServiceProvider = {
    provide: ShipsService,
    useFactory: () => ({
      findAll: jest.fn(() => ({
        "ships": [
          {
            "id": 10,
            "name": "Your Name",
            "location": "Lima",
            "price": 10.2
          }
        ],
        "shipsCount": 1
      }))
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipsController],
      providers: [ShipsServiceProvider]
    }).compile();

    controller = module.get<ShipsController>(ShipsController);
    service = module.get<ShipsService>(ShipsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shoud call findAll and get data', async () => {
    const queryFilter = new QueryShipsFilter();
    await controller.findAll(queryFilter)
      .then((response) => {
        expect(service.findAll).toHaveBeenCalled();
        expect(response.shipsCount).toBe(1);
      });
  });
});
