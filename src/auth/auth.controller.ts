import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto, createU } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  prisma: any;
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { username, password }: LoginDto) {
    return this.authService.login(username, password);
  }

  // @Post('user')
  // createUser(@Body() { username, password,role }: createU) {
  //   return this.authService.createUser(username, password, role);
  // }
}
