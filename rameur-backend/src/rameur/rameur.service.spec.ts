import { Test, TestingModule } from '@nestjs/testing';
import { RameurService } from './rameur.service';

describe('RameurService', () => {
  let service: RameurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RameurService],
    }).compile();

    service = module.get<RameurService>(RameurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
