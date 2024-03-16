/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'mongoose';

export type DashboardDocument = Dashboard & Document;

@Schema({ versionKey: false, timestamps: true })
export class Dashboard extends Model<Dashboard> {
  @ApiProperty({
    example: 'New dashboard',
    description: 'dashboard name',
  })
  @Prop({
    type: String,
    default: 'New Dashboard',
  })
  name: string;
}

export const DashboardSchema = SchemaFactory.createForClass(Dashboard);
