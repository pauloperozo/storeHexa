import { PaymentEntity } from 'src/payment/domain/payment.entity';
import { PaymentRepository } from 'src/payment/domain/payment.repository';

export class BuyService {
  constructor(private readonly customerRepository: PaymentRepository) {}
  async run(customerId: string, total: number) {
    const newPayment = new PaymentEntity();
    newPayment.customerId = customerId;
    newPayment.total = total;
    await this.customerRepository.save(newPayment);
  }
}
