import { IsNumber, IsString, IsDate, IsBoolean, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  menu: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsNumber()
  deliveryPrice: number;

  @IsString()
  intraId: string;

  @IsNumber()
  maximumPeopleNum: number;

  @IsNumber()
  currentPeopleNum: number;

  @IsNumber()
  matchingEndTime: number;

  @IsBoolean()
  avaliable: boolean;

  @IsNumber()
  createdAt: number;;

  @IsNumber()
  updatedAt: number;
}
