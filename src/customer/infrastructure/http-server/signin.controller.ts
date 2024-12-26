import { Controller, Post, Body } from '@nestjs/common';
import { SignInService } from 'src/customer/application/services/signin.service';
import { SignInDto } from '../dtos/signin.dto';

@Controller('api/signin')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  run(@Body() body: SignInDto) {
    const { email, otp } = body;
    return this.signInService.run(email, otp);
  }
}
