import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuardLocal } from './auth/auth.guard-local';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuardLocal)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}