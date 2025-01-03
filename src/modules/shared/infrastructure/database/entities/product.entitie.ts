import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  productId!: string;

  @Column()
  name!: string;

  @Column()
  currency!: string;

  @Column()
  price!: number;

  @Column()
  amount!: number;

  @Column()
  img!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;
}
