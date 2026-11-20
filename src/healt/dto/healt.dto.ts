import { IsNotEmpty, IsNumber, IsPositive,} from "class-validator"

export class DiscountDTO {
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    weight: number 

    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    height: number 
}
