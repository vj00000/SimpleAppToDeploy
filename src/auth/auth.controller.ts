import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthCredentialsDto } from './dto/auth-credentials.dto';
// import { AuthCredentialsDto } from './dto/auth-credentials';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  // @Get('profile')
  // getProfile() {
  //   return this.userService.userProfile();
  // }
}