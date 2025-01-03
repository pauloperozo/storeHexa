import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('payments')
export class PaymentTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  paymentId!: string;

  @Column()
  customerId!: string;

  @Column()
  total: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;
}
