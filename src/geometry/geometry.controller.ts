import { Body, Controller, Post } from '@nestjs/common';
import { CircleAreaDto } from './dto/circle.dto';
import { GeometryService } from './geometry.service';

@Controller('geometry')
export class GeometryController {
  constructor(
    private readonly geometryService: GeometryService,
  ) {}

  @Post('circle-area')
  calculateCircleArea(@Body() dto: CircleAreaDto) {
    return this.geometryService.countCircleArea(dto);
  }
}