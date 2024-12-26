export interface TokenRepository {
  sign(payload: object): string;
  verify(token: string): object;
}
