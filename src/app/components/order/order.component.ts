import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private orderName: string;
  private orderId: number;
  private isPro: boolean;
  private goods: Goods;
  constructor(private routeInfo: ActivatedRoute) { };
  focus: boolean = false;

  ngOnInit() {
    this.routeInfo.queryParams.subscribe((queryParam: Params) => {
      this.orderName = queryParam['name'];//在查询参数中传递数据
    })

    this.routeInfo.params.subscribe((params: Params) => {
      this.orderId = params['id'];//在路由配置中传递数据
    });

    this.routeInfo.data.subscribe((data: { goods: Goods }) => {
      this.goods = data.goods;
    });

    this.isPro = this.routeInfo.snapshot.data[0]['isPro']

    // this.orderName = this.routeInfo.snapshot.queryParams['name'] //参数快照
  }
  isFocus() {
    return this.focus
  }
}

export class Goods {
  constructor(public name: string, public id: number) {

  }
}
