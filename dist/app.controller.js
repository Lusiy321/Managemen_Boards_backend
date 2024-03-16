"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const dashboard_model_1 = require("./dashboard.model");
const update_board_dto_1 = require("./dto/update.board.dto");
const card_model_1 = require("./card.model");
const update_card_dto_1 = require("./dto/update.card.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getAllDashboards() {
        return await this.appService.findAllDashboard();
    }
    async findDashboardByName(name) {
        return await this.appService.findDashboardByName(name);
    }
    async findDashboardById(id) {
        return await this.appService.findDashboardById(id);
    }
    async createDashboard(name) {
        return await this.appService.createDashboard(name);
    }
    async updateDashboard(board) {
        return await this.appService.updateDashboard(board.id, board.name);
    }
    async deleteDashboard(id) {
        return await this.appService.deleteDashboard(id);
    }
    async findAllCards() {
        return await this.appService.findAllCards();
    }
    async findCardByBoardId(boardId) {
        return await this.appService.findCardsByBoardId(boardId);
    }
    async createCard(title, boardId) {
        return await this.appService.createCard(title, boardId);
    }
    async updateCard(id, params) {
        return await this.appService.updateCard(id, params);
    }
    async deleteCard(id) {
        return await this.appService.deleteCard(id);
    }
    async changeBoardFromCard(id, boardId) {
        return await this.appService.changeBoardFromCard(id, boardId);
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all dashboards',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dashboard_model_1.Dashboard }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllDashboards", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get dashboard by name',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dashboard_model_1.Dashboard }),
    (0, common_1.Get)('/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findDashboardByName", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get dashboard by id',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dashboard_model_1.Dashboard }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findDashboardById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create dashboard',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dashboard_model_1.Dashboard }),
    (0, common_1.Post)('/create-board/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createDashboard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Update dashboard',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dashboard_model_1.Dashboard }),
    (0, common_1.Put)('/update-board'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_board_dto_1.UpdateDashboardDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateDashboard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete dashboard',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dashboard_model_1.Dashboard }),
    (0, common_1.Delete)('/delete-board/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteDashboard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all cards',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: card_model_1.Card }),
    (0, common_1.Get)('/cards/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAllCards", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get card by dashboard id',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: card_model_1.Card }),
    (0, common_1.Get)('/cards/:boardId'),
    __param(0, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findCardByBoardId", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create card',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: card_model_1.Card }),
    (0, common_1.Post)('/create-card/:title/:boardId'),
    __param(0, (0, common_1.Param)('title')),
    __param(1, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Update card',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: card_model_1.Card }),
    (0, common_1.Put)('/update-card/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_card_dto_1.UpdateCardDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete card',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: card_model_1.Card }),
    (0, common_1.Delete)('/delete-card/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Change board from card',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: card_model_1.Card }),
    (0, common_1.Put)('/change-board/:id/:boardId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "changeBoardFromCard", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map