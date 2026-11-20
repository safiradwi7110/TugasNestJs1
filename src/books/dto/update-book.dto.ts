import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  judul?: string;

  @IsOptional()
  @IsString()
  penulis?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  tahun?: number;
}