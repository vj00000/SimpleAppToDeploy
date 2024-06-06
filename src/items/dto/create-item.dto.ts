import { IsString, IsNotEmpty, IsDecimal, IsOptional, IsDate } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDecimal()
  @IsNotEmpty()
  starting_price: number;

  @IsOptional()
  @IsString()
  image_url?: string;

  // @IsDate()
  @IsNotEmpty()
  end_time: Date;
}