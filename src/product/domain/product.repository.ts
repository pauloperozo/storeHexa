import { ProductEntity } from './product.entity';
export interface ProductRepository {
  findAll(): Promise<ProductEntity[]>;
}
