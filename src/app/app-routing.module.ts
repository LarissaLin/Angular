import { GoodsResolve } from './guard/goods.resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { BuyerListComponent } from './components/buyer-list/buyer-list.component';
import { Code404Component } from './components/code404/code404.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomerComponent , outlet:'aux'},
  {
    path: 'order/:id', component: OrderComponent, data: [{ isPro: true }], children: [
      { path: '', component: BuyerListComponent },
      { path: 'seller/:id', component: SellerListComponent },
    ],
    canActivate:[PermissionGuard],
    canDeactivate:[FocusGuard],
    resolve:{
      goods:GoodsResolve, //当进到order路由的时候我需要携带一个名字叫goods的数据,该数据由GoodsResolve提供.
      //xxx:XxxResolve, // 名字为xxx的数据需要XxxResolve提供.
    }
  },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
