import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof Users
  ) {}

  async create(createUser): Promise<Users> {
    return await this.userRepository.create<Users>(createUser);
  }

  async findAll() {
    return await this.userRepository.findAll<Users>();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `is7udhfisd isdg isdfgisdfg isdgfisdfgisdfg isdfg s a #${id} user`;
  }
}
