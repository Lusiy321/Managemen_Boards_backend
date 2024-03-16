/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Dashboard } from './dashboard.model';
import { UpdateDashboardDto } from './dto/update.board.dto';
import { Card } from './card.model';
import { UpdateCardDto } from './dto/update.card.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // DASHBOARD
  @ApiOperation({
    summary: 'Get all dashboards',
  })
  @ApiResponse({ status: 200, type: Dashboard })
  @Get('/')
  async getAllDashboards(): Promise<Dashboard[]> {
    return await this.appService.findAllDashboard();
  }

  @ApiOperation({
    summary: 'Get dashboard by name',
  })
  @ApiResponse({ status: 200, type: Dashboard })
  @Get('/:name')
  async findDashboardByName(@Param('name') name: string): Promise<Dashboard> {
    return await this.appService.findDashboardByName(name);
  }
  @ApiOperation({
    summary: 'Get dashboard by id',
  })
  @ApiResponse({ status: 200, type: Dashboard })
  @Get('/:id')
  async findDashboardById(@Param('id') id: string): Promise<Dashboard> {
    return await this.appService.findDashboardById(id);
  }
  @ApiOperation({
    summary: 'Create dashboard',
  })
  @ApiResponse({ status: 201, type: Dashboard })
  @Post('/create-board/:name')
  async createDashboard(@Param('name') name: string): Promise<Dashboard> {
    return await this.appService.createDashboard(name);
  }

  @ApiOperation({
    summary: 'Update dashboard',
  })
  @ApiResponse({ status: 200, type: Dashboard })
  @Put('/update-board')
  async updateDashboard(@Body() board: UpdateDashboardDto): Promise<Dashboard> {
    return await this.appService.updateDashboard(board.id, board.name);
  }
  @ApiOperation({
    summary: 'Delete dashboard',
  })
  @ApiResponse({ status: 200, type: Dashboard })
  @Delete('/delete-board/:id')
  async deleteDashboard(@Param('id') id: string): Promise<Dashboard> {
    return await this.appService.deleteDashboard(id);
  }

  // CARDS
  @ApiOperation({
    summary: 'Get all cards',
  })
  @ApiResponse({ status: 200, type: Card })
  @Get('/cards/find')
  async findAllCards(): Promise<Card[]> {
    return await this.appService.findAllCards();
  }

  @ApiOperation({
    summary: 'Get card by dashboard id',
  })
  @ApiResponse({ status: 200, type: Card })
  @Get('/cards/:boardId')
  async findCardByBoardId(@Param('boardId') boardId: string): Promise<Card[]> {
    return await this.appService.findCardsByBoardId(boardId);
  }
  @ApiOperation({
    summary: 'Create card',
  })
  @ApiResponse({ status: 201, type: Card })
  @Post('/create-card/:title/:boardId')
  async createCard(
    @Param('title') title: string,
    @Param('boardId') boardId: string,
  ): Promise<Card> {
    return await this.appService.createCard(title, boardId);
  }
  @ApiOperation({
    summary: 'Update card',
  })
  @ApiResponse({ status: 200, type: Card })
  @Put('/update-card/:id')
  async updateCard(
    @Param('id') id: string,
    @Body() params: UpdateCardDto,
  ): Promise<Card> {
    return await this.appService.updateCard(id, params);
  }
  @ApiOperation({
    summary: 'Delete card',
  })
  @ApiResponse({ status: 200, type: Card })
  @Delete('/delete-card/:id')
  async deleteCard(@Param('id') id: string): Promise<Card> {
    return await this.appService.deleteCard(id);
  }
  @ApiOperation({
    summary: 'Change board from card',
  })
  @ApiResponse({ status: 200, type: Card })
  @Put('/change-board/:id/:boardId')
  async changeBoardFromCard(
    @Param('id') id: string,
    @Param('boardId') boardId: string,
  ): Promise<Card> {
    return await this.appService.changeBoardFromCard(id, boardId);
  }
}
