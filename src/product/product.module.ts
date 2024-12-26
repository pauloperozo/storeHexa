import { Module } from '@nestjs/common';
import { GetAllProductService } from './application/services/getAllProduct.service';
import { GetAllProductController } from './infrastructure/http-server/getAllProduct.controller';
import { ProductRepositoryImpl } from './infrastructure/repositories/product.repository.impl';
import { Constant } from 'src/constant';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from 'src/core/infrastructure/database/model/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  providers: [
    { provide: Constant.ProductRepository, useClass: ProductRepositoryImpl },
    GetAllProductService,
  ],
  controllers: [GetAllProductController],
})
export class ProductModule {}
