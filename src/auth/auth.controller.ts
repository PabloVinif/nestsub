import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './auth.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('signin')
  async signin(@Body() credentials: { user: string; pass: string }) {
    return this.authenticationService.signin(credentials);
  }
}
