export class Payment {
  paymentId: string;
  customerId: string;
  total: number;
  status: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | null;
}
