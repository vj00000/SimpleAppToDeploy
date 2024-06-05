import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  RegisterNewUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('login')
  loginUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.loginUser(createUserDto);
  }

  @Get('profile')
  getProfile() {
    return this.userService.userProfile();
  }

}
