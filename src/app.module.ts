import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { typeOrmConfig } from './core/infrastructure/database/db.config';
import { CustomerModule } from './customer/customer.module';
 
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductModule,
    CustomerModule,
  ],
  providers: [ ],
})
export class AppModule {}
