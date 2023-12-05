import {  ApiProperty } from '@nestjs/swagger';
import { File } from 'buffer';
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  content: string;

  @IsString()
  @ApiProperty()
  author: string;

  @ApiProperty({ required: false })
  image: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: true,
  })
  file: File;

  @ApiProperty({type:'boolean',required:false})
  published: boolean;

  @ApiProperty({ type: [String], default: [],isArray: true,required:false})
  tags: string[]=[];

  @IsDate()
  @ApiProperty()
  @Type(() => Date)
  @IsDate({ message: 'Invalid date format!' })
  publicationDate: Date;
}
