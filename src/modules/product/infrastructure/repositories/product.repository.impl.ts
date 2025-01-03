import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/product.repository';
import { ProductModel } from '../../../shared/infrastructure/database/entities/product.model';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(ProductModel)
    private readonly model: Repository<ProductModel>,
  ) {}

  async findAll(): Promise<ProductEntity[]> {
    const models = await this.model.find();
    const productEntities = models.map((model) => {
      const productEntity = new ProductEntity();
      productEntity.productId = model.productId;
      productEntity.name = model.name;
      productEntity.currency = model.currency;
      productEntity.price = model.price;
      productEntity.amount = model.amount;
      productEntity.img = model.img;
      return productEntity;
    });

    return productEntities;
  }
}
