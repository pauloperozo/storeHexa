import { Injectable, Inject } from '@nestjs/common';
import { OtpRepository } from './otp.repository';

@Injectable()
export class OtpService {
  constructor(
    @Inject('OtpRepository')
    private readonly repository: OtpRepository,
  ) {}

  make() {
    return this.repository.make();
  }
}
