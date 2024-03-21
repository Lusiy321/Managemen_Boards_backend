/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Dashboard } from './dashboard.model';
import { Conflict, NotFound, BadRequest } from 'http-errors';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppController } from './app.controller';

describe('AppService', () => {
  let service: AppService;
  let dashboardModel: Model<Dashboard>;
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getModelToken(Dashboard.name),
          useValue: {
            new: jest.fn().mockResolvedValue({} as Dashboard),
            findOne: jest.fn().mockResolvedValue(null),
            find: jest.fn().mockResolvedValue([] as Dashboard[]),
            create: jest.fn().mockResolvedValue({} as Dashboard),
            save: jest.fn().mockResolvedValue({} as Dashboard),
            findByIdAndUpdate: jest.fn().mockResolvedValue({} as Dashboard),
            findByIdAndDelete: jest.fn().mockResolvedValue({} as Dashboard),
          },
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
    dashboardModel = module.get<Model<Dashboard>>(
      getModelToken(Dashboard.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of dashboards', async () => {
    const dashboards: Dashboard[] = [
      {
        _id: '61999999999999999999999',
        name: 'Dashboard 1',
      },
      {
        _id: '619999999999999999999998',
        name: 'Dashboard 2',
      },
    ];

    jest.spyOn(service, 'findAllDashboard').mockImplementation(() => {
      return Promise.resolve(dashboards);
    });

    const result = await service.findAllDashboard();

    expect(result).toEqual(dashboards);
  });

  it('should return a single dashboard', async () => {
    const dashboard: Dashboard = {
      _id: '61999999999999999999999',
      name: 'Dashboard 1',
    };

    jest.spyOn(service, 'findDashboardByName').mockImplementation(() => {
      return Promise.resolve(dashboard);
    });

    const result = await service.findDashboardByName('Dashboard 1');

    expect(result).toEqual(dashboard);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a dashboard when given a valid id', async () => {
    const dashboard = new Dashboard({
      name: 'test',
    });
    await dashboard.save();

    const result = await service.findDashboardById(dashboard.id);

    expect(result).toEqual(dashboard);
  });

  it('should throw an error when given an invalid id', async () => {
    await expect(service.findDashboardById('invalid id')).rejects.toThrow(
      NotFound,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(dashboardModel).toBeDefined();
  });

  describe('createDashboard', () => {
    it('should create a new dashboard', async () => {
      const name = 'My Dashboard';
      const result = await appController.createDashboard(name);
      expect(result).toBeDefined();
      expect(result.name).toEqual(name);
      expect(service.createDashboard).toBeCalledWith(name);
    });

    it('should throw a BadRequest error when the name is empty', async () => {
      await expect(appController.createDashboard('')).rejects.toThrow(
        BadRequest,
      );
      expect(service.createDashboard).not.toBeCalled();
    });

    it('should throw a Conflict error when the dashboard already exists', async () => {
      jest.spyOn(service, 'createDashboard').mockRejectedValue(new Conflict());
      await expect(
        appController.createDashboard('My Dashboard'),
      ).rejects.toThrow(Conflict);
      expect(service.createDashboard).toBeCalledTimes(1);
    });
  });

  describe('updateDashboard', () => {
    it('should update the name of the dashboard', async () => {
      const updatedDashboard = await service.updateDashboard('1', 'new name');
      expect(updatedDashboard.name).toEqual('new name');
    });

    it('should throw a NotFound error if the dashboard is not found', async () => {
      await expect(service.updateDashboard('1', 'new name')).rejects.toThrow(
        NotFound,
      );
    });

    it('should throw a BadRequest error if the name is empty', async () => {
      await expect(service.updateDashboard('1', '')).rejects.toThrow(
        BadRequest,
      );
    });
  });
});
