import { TokenRepository } from 'src/customer/domain/token.repository';
import config from 'src/config';
import jwt from 'jsonwebtoken';
import {
  signTokenFailed,
  verifyTokenFailed,
} from 'src/customer/domain/customer.exceptions';

export class TokenRepositoryImpl implements TokenRepository {
  sign(payload: object): string {
    try {
      return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
      });
    } catch (error) {
      throw new signTokenFailed(error.message);
    }
  }

  verify(token: string): object {
    try {
      return jwt.verify(token, config.jwt.secret);
    } catch (error) {
      throw new verifyTokenFailed(error.message);
    }
  }
}
