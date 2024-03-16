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
exports.UpdateCardDto = exports.column = void 0;
const swagger_1 = require("@nestjs/swagger");
var column;
(function (column) {
    column["do"] = "do";
    column["progress"] = "progress";
    column["done"] = "done";
})(column || (exports.column = column = {}));
class UpdateCardDto {
}
exports.UpdateCardDto = UpdateCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'It is a new card', description: 'Card title' }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'I whand music band on my restoran',
        description: 'Card description',
    }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '65ef38abfc408b1754e1dd7b',
        description: 'Dashboard ID',
    }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "dashboard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'do', description: 'Card state' }),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "state", void 0);
//# sourceMappingURL=update.card.dto.js.map