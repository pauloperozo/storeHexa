import { Injectable, Inject } from '@nestjs/common';
import { TokenRepository } from './token.repository';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TokenRepository')
    private readonly repository: TokenRepository,
  ) {}

  sign(payload: object): string {
    return this.repository.sign(payload);
  }

  verify(token: string): object {
    return this.repository.verify(token);
  }
}
