import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto) {
    
    return 'This action adds a new user';
  }

  loginUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  userProfile() {
    return 'This action adds a new user';
  }
}
