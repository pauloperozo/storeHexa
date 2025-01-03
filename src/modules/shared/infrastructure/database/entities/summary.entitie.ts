import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('summary')
export class SumaryTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  sumaryId!: string;

  @Column()
  paymentId: string;

  @Column()
  productId: string;

  @Column()
  currency: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;
}
