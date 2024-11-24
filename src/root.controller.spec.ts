import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller';
import { RootService } from './root.service';

describe('RootController', () => {
  let rootController: RootController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService],
    }).compile();

    rootController = module.get<RootController>(RootController);
  });

  describe('base endpoint', () => {
    it('should return "Welcome!"', () => {
      expect(rootController.getWelcome()).toBe('Welcome!');
    });
  });
});
