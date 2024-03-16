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
exports.CardSchema = exports.Card = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const update_card_dto_1 = require("./dto/update.card.dto");
let Card = class Card extends mongoose_2.Model {
};
exports.Card = Card;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'It is a new card',
        description: 'Card title',
    }),
    (0, mongoose_1.Prop)({
        type: String,
        default: 'My Card Title',
    }),
    __metadata("design:type", String)
], Card.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'I whand music band on my restoran',
        description: 'Card description',
    }),
    (0, mongoose_1.Prop)({
        type: String,
        default: 'My Card Description',
    }),
    __metadata("design:type", String)
], Card.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '65ef38abfc408b1754e1dd7b',
        description: 'Dashboard ID',
    }),
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], Card.prototype, "dashboard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'do',
        description: 'Card state',
    }),
    (0, mongoose_1.Prop)({
        type: String,
        default: 'do',
    }),
    __metadata("design:type", String)
], Card.prototype, "state", void 0);
exports.Card = Card = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Card);
exports.CardSchema = mongoose_1.SchemaFactory.createForClass(Card);
//# sourceMappingURL=card.model.js.map