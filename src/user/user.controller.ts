import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './jwt-auth.gaurd';
import { AuthService } from './auth.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async RegisterNewUser(@Body() createUserDto: CreateUserDto) {
    const user = this.userService.createUser(createUserDto);
    return user;
  }

  @Post('login')
  async loginUser(@Body() {username,password}) {
    const user = await this.authService.validateUser(username,password);
    const token = await this.authService.login(user);
    return { token };  
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    const username = req.user.username;
    return await this.userService.findOneByUsername(username);
  }
  
}
