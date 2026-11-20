import { Injectable } from '@nestjs/common';
import { CircleAreaDto } from './dto/circle.dto';

@Injectable()
export class GeometryService {
  countCircleArea(circleDto: CircleAreaDto) {
    const area = Math.PI * circleDto.radius * circleDto.radius;

    return {
      message: 'Area of circle has counted',
      data: area,
    };
  }
}