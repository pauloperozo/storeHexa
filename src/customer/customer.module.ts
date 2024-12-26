import { Module } from '@nestjs/common';
import { Constant } from 'src/constant';

// controllers
import { SignUpController } from './infrastructure/http-server/signup.controller';
import { SignInController } from './infrastructure/http-server/signin.controller';
import { ForgotController } from './infrastructure/http-server/forgot.controller';

// services
import { SignUpService } from './application/services/signup.service';
import { SignInService } from './application/services/signin.service';
import { ForgotService } from './application/services/forgot.service';

// implement
import { CustomerRepositoryImpl } from './infrastructure/repositories/customer.repository.impl';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModel } from 'src/core/infrastructure/database/model/customer.model';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerModel])],
  providers: [
    SignUpService,
    SignInService,
    ForgotService,
    { provide: Constant.CustomerRepository, useClass: CustomerRepositoryImpl },
  ],
  controllers: [SignUpController, SignInController, ForgotController],
})
export class CustomerModule {}
