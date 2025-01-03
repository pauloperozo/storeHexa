import { Controller, Post, Body } from '@nestjs/common';
import { SignUpCustomerUseCase } from '../../../application/use-case/signup-customer.usecase';
import { SignUpDto } from '../dtos/signup.dto';

@Controller('api/signup')
export class SignUpController {
  constructor(private readonly signUpCustomerUseCase: SignUpCustomerUseCase) {}

  @Post()
  run(@Body() body: SignUpDto) {
    const { email } = body;
    return this.signUpCustomerUseCase.run(email);
  }
}
