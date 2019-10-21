import { CanDeactivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from '../components/order/order.component';

export class FocusGuard implements CanDeactivate<OrderComponent>{
  canDeactivate(component: OrderComponent) {
    if (component.isFocus()) {
      return true
    }else
    return window.confirm('是否关注卖家');
  }
}
