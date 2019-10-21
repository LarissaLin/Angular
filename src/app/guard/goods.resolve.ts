import { Goods } from './../components/order/order.component';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable() //有这个装饰器就表示当前类可以使用依赖注入.之所以在component页面 只是用@Component也可以在构造函数注入依赖,是因为@Component已经继承了Injectable
export class GoodsResolve implements Resolve<Goods> {
  constructor(private router: Router) { //要使依赖注入生效就添加@Injectable装饰器

  }
  resolve(route: ActivatedRouteSnapshot) {
    let orderId = route.params['id'];
    if (orderId == 1) {
      return new Goods('女装', 1)//成功获取订单为1的话我们就返回相关的商品信息,否则就导航到首页.
    } else {
      this.router.navigate(['/home'])
    }
  }
}
