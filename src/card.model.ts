/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { column } from './dto/update.card.dto';

export type CardDocument = Card & Document;

@Schema({ versionKey: false, timestamps: true })
export class Card extends Model<Card> {
  @ApiProperty({
    example: 'It is a new card',
    description: 'Card title',
  })
  @Prop({
    type: String,
    default: 'My Card Title',
  })
  title: string;

  @ApiProperty({
    example: 'I whand music band on my restoran',
    description: 'Card description',
  })
  @Prop({
    type: String,
    default: 'My Card Description',
  })
  description: string;

  @ApiProperty({
    example: '65ef38abfc408b1754e1dd7b',
    description: 'Dashboard ID',
  })
  @Prop({
    type: String,
  })
  dashboard: string;

  @ApiProperty({
    example: 'do',
    description: 'Card state',
  })
  @Prop({
    type: String,
    default: 'do',
  })
  state: column;
}

export const CardSchema = SchemaFactory.createForClass(Card);
