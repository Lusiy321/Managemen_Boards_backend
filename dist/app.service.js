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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const card_model_1 = require("./card.model");
const dashboard_model_1 = require("./dashboard.model");
const http_errors_1 = require("http-errors");
let AppService = class AppService {
    constructor(cardModel, dashboardModel) {
        this.cardModel = cardModel;
        this.dashboardModel = dashboardModel;
    }
    async findAllDashboard() {
        try {
            const find = await this.dashboardModel.find().exec();
            return find;
        }
        catch (e) {
            throw new http_errors_1.NotFound('Dashboards not found');
        }
    }
    async findDashboardByName(name) {
        try {
            const find = await this.dashboardModel.findOne({ name: name }).exec();
            return find;
        }
        catch (e) {
            throw new http_errors_1.NotFound('Dashboards not found');
        }
    }
    async findDashboardById(id) {
        try {
            const find = await this.dashboardModel.findById(id).exec();
            return find;
        }
        catch (e) {
            throw new http_errors_1.NotFound('Dashboards not found');
        }
    }
    async createDashboard(name) {
        try {
            const find = await this.dashboardModel.findOne({ name: name }).exec();
            const checkName = name.trim();
            if (checkName === '') {
                throw new http_errors_1.BadRequest('Dashboard name cannot be empty');
            }
            if (!find) {
                const newDashboard = await this.dashboardModel.create({
                    name: checkName,
                });
                const result = await newDashboard.save();
                return result;
            }
            else {
                throw new http_errors_1.Conflict('Dashboard already exists');
            }
        }
        catch (e) {
            throw new http_errors_1.BadRequest(e);
        }
    }
    async updateDashboard(id, name) {
        try {
            const find = await this.dashboardModel.findById(id).exec();
            if (find) {
                const result = await this.dashboardModel
                    .findByIdAndUpdate(id, { name: name }, { new: true })
                    .exec();
                return result;
            }
            else {
                throw new http_errors_1.NotFound('Dashboards not found');
            }
        }
        catch (e) {
            throw new http_errors_1.NotFound('Dashboards not found');
        }
    }
    async deleteDashboard(id) {
        try {
            const find = await this.dashboardModel.findById(id).exec();
            if (find) {
                const result = await this.dashboardModel.findByIdAndDelete(id).exec();
                return result;
            }
            else {
                throw new http_errors_1.NotFound('Dashboards not found');
            }
        }
        catch (e) {
            throw new http_errors_1.NotFound('Dashboards not found');
        }
    }
    async findAllCards() {
        try {
            console.log('tyt');
            const find = await this.cardModel.find().exec();
            return find;
        }
        catch (e) {
            throw new http_errors_1.NotFound('Cards not found');
        }
    }
    async findCardsByBoardId(boardId) {
        try {
            const find = await this.cardModel.find({ dashboard: boardId }).exec();
            return find;
        }
        catch (e) {
            throw new http_errors_1.NotFound('Cards not found');
        }
    }
    async createCard(title, description, dashboardId) {
        try {
            const find = await this.cardModel.findOne({ title: title }).exec();
            const checkName = title.trim();
            if (checkName === '') {
                throw new http_errors_1.BadRequest('Card name cannot be empty');
            }
            if (!find) {
                const newCard = await this.cardModel.create({
                    title: checkName,
                    description: description,
                    dashboard: dashboardId,
                });
                const result = await newCard.save();
                return result;
            }
            else {
                throw new http_errors_1.Conflict('Card already exists');
            }
        }
        catch (e) {
            throw new http_errors_1.BadRequest(e);
        }
    }
    async updateCard(id, params) {
        const find = await this.cardModel.findById(id).exec();
        if (find) {
            console.log(params);
            const result = await this.cardModel
                .findByIdAndUpdate({ _id: id }, params, { new: true })
                .exec();
            return result;
        }
        else {
            throw new http_errors_1.NotFound('Cards not found');
        }
    }
    async deleteCard(id) {
        try {
            const find = await this.cardModel.findById(id).exec();
            if (find) {
                const result = await this.cardModel.findByIdAndDelete(id).exec();
                return result;
            }
            else {
                throw new http_errors_1.NotFound('Card not found');
            }
        }
        catch (e) {
            throw new http_errors_1.NotFound('Card not found');
        }
    }
    async changeBoardFromCard(id, dashboardId) {
        try {
            const findCard = await this.cardModel.findById(id).exec();
            const findBoard = await this.dashboardModel.findById(id).exec();
            if (findCard && findBoard) {
                const result = await this.cardModel
                    .findByIdAndUpdate(id, { dashboard: dashboardId }, { new: true })
                    .exec();
                return result;
            }
            else {
                throw new http_errors_1.NotFound('Card or Dashboard not found');
            }
        }
        catch (e) {
            throw new http_errors_1.NotFound(e);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(card_model_1.Card.name)),
    __param(1, (0, mongoose_1.InjectModel)(dashboard_model_1.Dashboard.name)),
    __metadata("design:paramtypes", [card_model_1.Card,
        dashboard_model_1.Dashboard])
], AppService);
//# sourceMappingURL=app.service.js.map