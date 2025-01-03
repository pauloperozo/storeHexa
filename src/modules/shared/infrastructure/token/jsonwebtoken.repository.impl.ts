import { TokenRepository } from '../../application/token/token.repository';
import config from '../../../../config';
import jwt from 'jsonwebtoken';

export class JsonwebtokenRepositoryImpl implements TokenRepository {
  sign(payload: object): string | null {
    try {
      return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
      });
    } catch (error) {
      console.error(`Failed to sign token: ${error.message}`);
      return null;
    }
  }

  verify(token: string): object | null {
    try {
      return jwt.verify(token, config.jwt.secret);
    } catch (error) {
      console.error(`Failed to verify token: ${error.message}`);
      return null;
    }
  }
}
