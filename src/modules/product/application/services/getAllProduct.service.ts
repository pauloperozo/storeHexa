import { Injectable, Inject } from '@nestjs/common';
import { Constant } from 'src/constant';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/product.repository';

@Injectable()
export class GetAllProductService {
  constructor(
    @Inject(Constant.ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}
  async run(): Promise<ProductEntity[]> {
    return await this.productRepository.findAll();
  }
}
