import { CustomerNotFoundByEmail } from 'src/customer/domain/customer.exceptions';
import { CustomerRepository } from 'src/customer/domain/customer.repository';
import { OtpRepository } from 'src/customer/domain/otp.repository';

export class ForgotService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly otpRepository: OtpRepository,
  ) {}
  async run(email: string) {
    const customer = await this.customerRepository.findByEmail(email);
    if (!customer) {
      throw new CustomerNotFoundByEmail(email);
    }
    const { customerId } = customer;
    customer.otp = this.otpRepository.make();
    await this.customerRepository.update(customerId, customer);
  }
}
