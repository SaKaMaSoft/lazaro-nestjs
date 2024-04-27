import { Transform, Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional } from "class-validator";

export class ShipsDTO {
    id: number;
    name: string;
    location: string;
    price: number;
}

export class QueryShipsFilter {
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    id: number;
    @IsOptional()
    start: Date;
    @IsOptional()
    end: Date;    
}