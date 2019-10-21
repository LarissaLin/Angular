
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';
import { AnotherProductService } from 'src/app/services/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
  providers: [{ provide: ProductService, useClass: AnotherProductService }]
})
export class Product2Component implements OnInit {
  product2: Product

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product2 = this.productService.getProduct();
  }

}
