import { Injectable } from '@nestjs/common';
import { DiscountDTO } from './dto/discount.dto';

@Injectable()
export class ShopService {
    countDiscount (dto: DiscountDTO) {
        const harga = dto.harga
        const discount = dto.discount
        const finalPrice = (100-discount) *  harga

        return {
            message : "harga akhir telah dihitung",
            finalPrice 
        }
    }
}
