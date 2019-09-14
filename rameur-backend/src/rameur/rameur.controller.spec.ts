import { Test, TestingModule } from '@nestjs/testing';
import { RameurController } from './rameur.controller';

describe('Rameur Controller', () => {
  let controller: RameurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RameurController],
    }).compile();

    controller = module.get<RameurController>(RameurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
