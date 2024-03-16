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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSchema = exports.Dashboard = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let Dashboard = class Dashboard extends mongoose_2.Model {
};
exports.Dashboard = Dashboard;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'New dashboard',
        description: 'dashboard name',
    }),
    (0, mongoose_1.Prop)({
        type: String,
        default: 'New Dashboard',
    }),
    __metadata("design:type", String)
], Dashboard.prototype, "name", void 0);
exports.Dashboard = Dashboard = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Dashboard);
exports.DashboardSchema = mongoose_1.SchemaFactory.createForClass(Dashboard);
//# sourceMappingURL=dashboard.model.js.map