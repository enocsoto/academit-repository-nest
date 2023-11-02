import { IsString, MinLength } from "class-validator";

export class CreateAuthDto {

    @IsString()
    readonly username: string;

    @IsString()
    @MinLength(6)
    readonly password: string;

}
