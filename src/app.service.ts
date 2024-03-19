/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './card.model';
import { Dashboard } from './dashboard.model';
import { Conflict, NotFound, BadRequest } from 'http-errors';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Card.name)
    private cardModel: Card,
    @InjectModel(Dashboard.name) private dashboardModel: Dashboard,
  ) {}

  // DASHBOARDS METHODS
  async findAllDashboard(): Promise<Dashboard[]> {
    try {
      const find = await this.dashboardModel.find().exec();
      return find;
    } catch (e) {
      throw new NotFound('Dashboards not found');
    }
  }

  async findDashboardByName(name: string): Promise<Dashboard> {
    try {
      const find = await this.dashboardModel.findOne({ name: name }).exec();
      return find;
    } catch (e) {
      throw new NotFound('Dashboards not found');
    }
  }

  async findDashboardById(id: string): Promise<Dashboard> {
    try {
      const find = await this.dashboardModel.findById(id).exec();
      return find;
    } catch (e) {
      throw new NotFound('Dashboards not found');
    }
  }

  async createDashboard(name: string): Promise<Dashboard> {
    try {
      const find = await this.dashboardModel.findOne({ name: name }).exec();
      const checkName = name.trim();
      if (checkName === '') {
        throw new BadRequest('Dashboard name cannot be empty');
      }
      if (!find) {
        const newDashboard = await this.dashboardModel.create({
          name: checkName,
        });
        const result = await newDashboard.save();
        return result;
      } else {
        throw new Conflict('Dashboard already exists');
      }
    } catch (e) {
      throw new BadRequest(e);
    }
  }

  async updateDashboard(id: string, name: string): Promise<Dashboard> {
    try {
      const find = await this.dashboardModel.findById(id).exec();
      if (find) {
        const result = await this.dashboardModel
          .findByIdAndUpdate(id, { name: name }, { new: true })
          .exec();
        return result;
      } else {
        throw new NotFound('Dashboards not found');
      }
    } catch (e) {
      throw new NotFound('Dashboards not found');
    }
  }

  async deleteDashboard(id: string): Promise<Dashboard> {
    try {
      const find = await this.dashboardModel.findById(id).exec();
      if (find) {
        const result = await this.dashboardModel.findByIdAndDelete(id).exec();
        return result;
      } else {
        throw new NotFound('Dashboards not found');
      }
    } catch (e) {
      throw new NotFound('Dashboards not found');
    }
  }

  // CARDS METHODS

  async findAllCards(): Promise<Card[]> {
    try {
      console.log('tyt');
      const find = await this.cardModel.find().exec();
      return find;
    } catch (e) {
      throw new NotFound('Cards not found');
    }
  }

  async findCardsByBoardId(boardId: string): Promise<Card[]> {
    try {
      const find = await this.cardModel.find({ dashboard: boardId }).exec();
      return find;
    } catch (e) {
      throw new NotFound('Cards not found');
    }
  }
  async createCard(
    title: string,
    description: string,
    dashboardId: string,
  ): Promise<Card> {
    try {
      const find = await this.cardModel.findOne({ title: title }).exec();
      const checkName = title.trim();
      if (checkName === '') {
        throw new BadRequest('Card name cannot be empty');
      }
      if (!find) {
        const newCard = await this.cardModel.create({
          title: checkName,
          description: description,
          dashboard: dashboardId,
        });
        const result = await newCard.save();
        return result;
      } else {
        throw new Conflict('Card already exists');
      }
    } catch (e) {
      throw new BadRequest(e);
    }
  }

  async updateCard(id: string, params: any): Promise<Card> {
    // try {
    const find = await this.cardModel.findById(id).exec();
    if (find) {
      console.log(params);
      const result = await this.cardModel
        .findByIdAndUpdate({ _id: id }, params, { new: true })
        .exec();
      return result;
    } else {
      throw new NotFound('Cards not found');
    }
    // } catch (e) {
    //   throw new NotFound(e);
    // }
  }

  async deleteCard(id: string): Promise<Card> {
    try {
      const find = await this.cardModel.findById(id).exec();
      if (find) {
        const result = await this.cardModel.findByIdAndDelete(id).exec();
        return result;
      } else {
        throw new NotFound('Card not found');
      }
    } catch (e) {
      throw new NotFound('Card not found');
    }
  }

  async changeBoardFromCard(id: string, dashboardId: string) {
    try {
      const findCard = await this.cardModel.findById(id).exec();
      const findBoard = await this.dashboardModel.findById(id).exec();

      if (findCard && findBoard) {
        const result = await this.cardModel
          .findByIdAndUpdate(id, { dashboard: dashboardId }, { new: true })
          .exec();
        return result;
      } else {
        throw new NotFound('Card or Dashboard not found');
      }
    } catch (e) {
      throw new NotFound(e);
    }
  }
}
