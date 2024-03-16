/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export enum column {
  do = 'do',
  progress = 'progress',
  done = 'done',
}

export class UpdateCardDto {
  @ApiProperty({ example: 'It is a new card', description: 'Card title' })
  readonly title: string;
  @ApiProperty({
    example: 'I whand music band on my restoran',
    description: 'Card description',
  })
  readonly description: string;
  @ApiProperty({
    example: '65ef38abfc408b1754e1dd7b',
    description: 'Dashboard ID',
  })
  readonly dashboard: string;
  @ApiProperty({ example: 'do', description: 'Card state' })
  readonly state: column;
}
