import { LoggerService } from './logger.service';
import { ProductService, Product } from 'src/app/services/product.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService {
  getProduct(): import("./product.service").Product {

    return new Product('男装', 2)
  }

  constructor(public loggerService: LoggerService) { }
}
