import { IsNotEmpty, IsNumber, IsPositive, Max } from "class-validator"

export class DiscountDTO {
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    harga: number 

    @IsNotEmpty()
    @IsPositive()
    @Max(100)
    @IsNumber()
    discount: number 
}
