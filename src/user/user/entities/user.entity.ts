import { Table, Column, Model, DataType, IsEmail } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: Number;

    @Column
    name: string;

    @IsEmail
    @Column({
        type: DataType.STRING,
        validate: {
            isEmail: true
        }
    })
    email: string;
  
}
