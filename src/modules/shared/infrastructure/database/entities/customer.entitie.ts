import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('customers')
export class CustomerTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  customerId!: string;

  @Column()
  email!: string;

  @Column()
  otp!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;
}
