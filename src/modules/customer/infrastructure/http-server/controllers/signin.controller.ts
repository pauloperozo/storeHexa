import { Controller, Post, Body } from '@nestjs/common';
import { SignInCustomerUseCase  } from '../../../application/use-case/signin-customer.usecase';
import { SignInDto } from '../dtos/signin.dto';

@Controller('api/signin')
export class SignInController {
  constructor(private readonly signInCustomerUseCase: SignInCustomerUseCase) {}

  @Post()
  run(@Body() body: SignInDto) {
    const { email, otp } = body;
    return this.signInCustomerUseCase.run(email, otp);
  }
}
