import { CustomerNotFoundByEmail } from '../../domain/customer.exceptions';
import { CustomerRepository } from '../../domain/customer.repository';
import { OtpService } from '../../../shared/application/otp/otp.service';

export class ForgotCustomerUseCase {
  constructor(
    private readonly repository: CustomerRepository,
    private readonly otp: OtpService,
  ) {}

  async run(email: string): Promise<void> {
    const customer = await this.repository.findByEmail(email);
    if (!customer) {
      throw new CustomerNotFoundByEmail(email);
    }
    const { customerId } = customer;
    customer.otp = this.otp.make();
    await this.repository.update(customerId, customer);
  }
}
