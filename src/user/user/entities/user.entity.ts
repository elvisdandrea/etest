import { Table, Column, Model, DataType } from 'sequelize-typescript';

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

    @Column 
    email: string;
  
}
