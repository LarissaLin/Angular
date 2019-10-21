/* 这个文件是Angular 根模块,告诉Angular如何组装应用 */

//BrowserModule,是浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';

//Angular核心模块
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//路由配置模块
import { AppRoutingModule } from './app-routing.module';

//组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { MultiplePipe } from './pipt/multiple.pipe';
import { OrderComponent } from './components/order/order.component';
import { Code404Component } from './components/code404/code404.component';
import { BuyerListComponent } from './components/buyer-list/buyer-list.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';
import { GoodsResolve } from './guard/goods.resolve';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { Product2Component } from './components/product2/product2.component';
import { LoggerService } from './services/logger.service';

/*@NgModule装饰器,接受一个元数据对象,告诉Angular如何编译和启动应用*/
@NgModule({
  declarations: [ //配置当前项目运行的组件,指令,管道
    AppComponent, HomeComponent, ChildComponent, MultiplePipe, OrderComponent, Code404Component, BuyerListComponent, SellerListComponent, CustomerComponent, ProductComponent, Product2Component
  ],
  imports: [ //配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PermissionGuard, FocusGuard, GoodsResolve, ProductService,LoggerService],//配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图(称为根组件),通过引导根AppModule来启动项目,这里一般写的就是根组件
})

// 导出根模块
export class AppModule { }
