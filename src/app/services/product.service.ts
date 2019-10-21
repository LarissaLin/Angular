import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public loggerService:LoggerService) { }
  getProduct():Product{
    this.loggerService.log('getStock方法被调用');
    return new Product('童装',1);
  }
}

export class Product {
  constructor(public name: string, public id: number) { }
}
