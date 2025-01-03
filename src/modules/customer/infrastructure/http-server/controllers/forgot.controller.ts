import { Controller, Post, Body } from '@nestjs/common';
import { ForgotService } from 'src/customer/application/services/forgot.service';
import { ForgotDto } from './dtos/forgot.dto';

@Controller('api/forgot')
export class ForgotController {
  constructor(private readonly forgotService: ForgotService) {}

  @Post()
  run(@Body() body: ForgotDto) {
    const { email } = body;
    return this.forgotService.run(email);
  }
}
