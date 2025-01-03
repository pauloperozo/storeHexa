import { OtpRepository } from '../../application/otp/otp.repository';

export class OtpRepositoryImpl implements OtpRepository {
  make(): string {
    const [max, rnd, len, char] = [99999, Math.random(), 5, '0'];
    return `${Math.floor(rnd * max)}`.padStart(len, char);
  }
}
