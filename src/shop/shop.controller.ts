import { Body, Controller, Post,} from '@nestjs/common';
import { ShopService } from './shop.service';
import { DiscountDTO } from './dto/discount.dto';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post('discount')
  countDiscount(@Body() dto: DiscountDTO) {
    return this.shopService.countDiscount(dto) 
  }
}
