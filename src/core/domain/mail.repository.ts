export interface MailRepository {
  send(payload: object): Promise<void>;
}
