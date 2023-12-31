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

  async create(createUser: CreateUserDto): Promise<Users> {
    return await this.userRepository.create<Users>(createUser as Users);
  }

  async findAll() {
    return await this.userRepository.findAll<Users>();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let fields = {
      name: updateUserDto.name,
    }
    return await this.userRepository.update(fields as Users, { where: { id: id } }); 
  }

  remove(id: number) {
    return `is7udhfisd isdg isdfgisdasdkug asidugasdi yuasidgyfg isdgfisdfgisdfg isdfg s a #${id} user`;
  }
}
