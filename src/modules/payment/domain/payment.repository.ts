import { PaymentEntity } from './payment.entity';
export interface PaymentRepository {
  save(customer: PaymentEntity): Promise<void>;
}
