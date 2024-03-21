/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Dashboard } from './dashboard.model';
import { Card } from './card.model';
import { UpdateDashboardDto } from './dto/update.board.dto';
import { UpdateCardDto } from './dto/update.card.dto';

enum column {
  do = 'do',
  progress = 'progress',
  done = 'done',
}

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('getAllDashboards', () => {
    it('should return an array of dashboards', async () => {
      const result: Dashboard[] = [{ id: '1', name: 'Dashboard 1' }];
      jest.spyOn(appService, 'findAllDashboard').mockResolvedValue(result);

      expect(await appController.getAllDashboards()).toBe(result);
    });
  });

  describe('findDashboardByName', () => {
    it('should return a dashboard by name', async () => {
      const dashboard: Dashboard = { id: '1', name: 'Dashboard 1' };
      jest
        .spyOn(appService, 'findDashboardByName')
        .mockResolvedValue(dashboard);

      expect(await appController.findDashboardByName('Dashboard 1')).toBe(
        dashboard,
      );
    });
  });

  describe('findDashboardById', () => {
    it('should return a dashboard by ID', async () => {
      const dashboard: Dashboard = { id: '1', name: 'Dashboard 1' };
      jest.spyOn(appService, 'findDashboardById').mockResolvedValue(dashboard);

      expect(await appController.findDashboardById('1')).toBe(dashboard);
    });
  });

  describe('createDashboard', () => {
    it('should create a new dashboard', async () => {
      const dashboard: Dashboard = { id: '1', name: 'Dashboard 1' };
      jest.spyOn(appService, 'createDashboard').mockResolvedValue(dashboard);

      expect(await appController.createDashboard('Dashboard 1')).toBe(
        dashboard,
      );
    });
  });

  describe('updateDashboard', () => {
    it('should update an existing dashboard', async () => {
      const updatedDashboard: Dashboard = {
        id: '1',
        name: 'Updated Dashboard',
      };
      const updateDto: UpdateDashboardDto = {
        id: '1',
        name: 'Updated Dashboard',
      };
      jest
        .spyOn(appService, 'updateDashboard')
        .mockResolvedValue(updatedDashboard);

      expect(await appController.updateDashboard(updateDto)).toBe(
        updatedDashboard,
      );
    });
  });

  describe('deleteDashboard', () => {
    it('should delete an existing dashboard', async () => {
      const deletedDashboard: Dashboard = {
        id: '1',
        name: 'Deleted Dashboard',
      };
      jest
        .spyOn(appService, 'deleteDashboard')
        .mockResolvedValue(deletedDashboard);

      expect(await appController.deleteDashboard('1')).toBe(deletedDashboard);
    });
  });

  describe('findAllCards', () => {
    it('should return an array of cards', async () => {
      const result: Card[] = [
        {
          id: '1',
          title: 'Card 1',
          state: column.do,
          description: 'Description 1',
          dashboard: 'board-1',
        },
      ];
      jest.spyOn(appService, 'findAllCards').mockResolvedValue(result);

      expect(await appController.findAllCards()).toBe(result);
    });
  });

  describe('findCardByBoardId', () => {
    it('should return an array of cards by board ID', async () => {
      const boardId = 'board-1';
      const result: Card[] = [
        {
          id: '1',
          title: 'Card 1',
          state: column.do,
          description: 'Description 1',
          dashboard: 'board-1',
        },
      ];
      jest.spyOn(appService, 'findCardsByBoardId').mockResolvedValue(result);

      expect(await appController.findCardByBoardId(boardId)).toBe(result);
    });
  });

  describe('createCard', () => {
    it('should create a new card', async () => {
      const title = 'New Card';
      const description = 'New Card Description';
      const boardId = 'board-1';
      const card: Card = {
        id: '1',
        title,
        state: column.do,
        description,
        dashboard: boardId,
      };
      jest.spyOn(appService, 'createCard').mockResolvedValue(card);

      expect(await appController.createCard(title, description, boardId)).toBe(
        card,
      );
    });
  });

  describe('updateCard', () => {
    it('should update an existing card', async () => {
      const id = '1';
      const updatedCard: Card = {
        id,
        title: 'Updated Card',
        state: column.do,
        description: 'Updated Description',
        dashboard: 'board-1',
      };
      const updateDto: UpdateCardDto = {
        title: 'Updated Card',
        description: 'Updated Description',
        state: column.do,
        dashboard: 'board-1',
      };
      jest.spyOn(appService, 'updateCard').mockResolvedValue(updatedCard);

      expect(await appController.updateCard(id, updateDto)).toBe(updatedCard);
    });
  });

  describe('deleteCard', () => {
    it('should delete an existing card', async () => {
      const deletedCardId = '1';
      const deletedCard: Card = {
        id: deletedCardId,
        title: 'Deleted Card',
        state: column.do,
        description: 'Deleted Description',
        dashboard: 'board-1',
      };
      jest.spyOn(appService, 'deleteCard').mockResolvedValue(deletedCard);

      expect(await appController.deleteCard(deletedCardId)).toBe(deletedCard);
    });
  });

  describe('changeBoardFromCard', () => {
    it('should change the board of an existing card', async () => {
      const cardId = '1';
      const newBoardId = 'board-2';
      const updatedCard: Card = {
        id: cardId,
        title: 'Card 1',
        state: column.do,
        description: 'Description 1',
        dashboard: newBoardId,
      };
      jest
        .spyOn(appService, 'changeBoardFromCard')
        .mockResolvedValue(updatedCard);

      expect(await appController.changeBoardFromCard(cardId, newBoardId)).toBe(
        updatedCard,
      );
    });
  });
});
