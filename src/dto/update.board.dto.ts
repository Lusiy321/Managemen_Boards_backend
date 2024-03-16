/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDashboardDto {
  id: string;
  @ApiProperty({ example: 'It is a new name', description: 'Dashboard name' })
  readonly name: string;
}
