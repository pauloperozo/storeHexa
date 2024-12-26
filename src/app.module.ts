import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { typeOrmConfig } from './core/infrastructure/database/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductModule],
})
export class AppModule {}
