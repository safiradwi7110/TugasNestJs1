import { Body, Controller, Post, } from '@nestjs/common';
import { HealtService } from './healt.service';

@Controller('healt')
export class HealtController {
  constructor(private readonly healtService: HealtService) {}

  @Post('bmi')
  getBMI(@Body('weight') weight: string, @Body('height') height: string): string {
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);
    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      return 'Invalid input';
    }
    return this.healtService.getBMI(weightNumber, heightNumber);
  }

}
