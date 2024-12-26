import { Controller, Post, Body } from '@nestjs/common';
import { SignUpService } from '../../application/services/signup.service';
import { SignUpDto } from '../../infrastructure/dtos/signup.dto';

@Controller('api/signup')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  run(@Body() body: SignUpDto) {
    const { email } = body;
    return this.signUpService.run(email);
  }
}
