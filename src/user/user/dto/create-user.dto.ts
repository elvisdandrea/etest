import { IsEmail } from "sequelize-typescript";

export class CreateUserDto {

    public readonly id!: Number;
    public readonly name: string;
    public readonly email: string;

}
