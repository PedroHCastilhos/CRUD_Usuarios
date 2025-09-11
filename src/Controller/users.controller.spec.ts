import { Test, TestingModule } from '@nestjs/testing';
import { UseersController } from './users.controller';

describe('UseersController', () => {
  let controller: UseersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UseersController],
    }).compile();

    controller = module.get<UseersController>(UseersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
