import { Controller, Get } from '@nestjs/common';
import { GetAllProductService } from 'src/product/application/services/getAllProduct.service';

@Controller('api/product')
export class GetAllProductController {
  constructor(private readonly GetAllProductService: GetAllProductService) {}

  @Get()
  run() {
    return this.GetAllProductService.run();
  }
}
