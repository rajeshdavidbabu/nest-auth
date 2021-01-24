import { Controller, Get, UseGuards } from '@nestjs/common';
import { HomeService } from './home.service';
import { AuthGuardJwt } from '../auth/auth.guard-jwt';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @UseGuards(AuthGuardJwt)
  @Get()
  getHello(): string {
    return this.homeService.getHello();
  }
}
