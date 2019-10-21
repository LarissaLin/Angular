import { ChildComponent } from './components/child/child.component';
import { Component, ViewChild } from '@angular/core'; //引入核心模块里面的component
import { Router } from '@angular/router';

//@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据.至于加上@Component 装饰器，它才变成了组件.
@Component({
  selector: 'app-root',//是css装饰器,通过标签的使用方式.来创建并插入改组件的一个实例,比如在index.html包含<app-root></app-root>就插入了该组件的实例视图
  templateUrl: './app.component.html',//模板:这里插入一个外联html模板.也可以用template属性提供内联的html.
  styleUrls: ['./app.component.scss'],//该模板所使用的的css
  providers: []//当前组件所需的服务提供商的一个数组
})
export class AppComponent {
  constructor(private route:Router){

  }
  parentData: Array<string> = [
    'angular', 'react', 'vue'
  ]
  major: number = 1;
  minor: number = 2;
  message: string;
  value:string;
  @ViewChild(ChildComponent, { static: false }) childDom: ChildComponent

  messageFromChild(message) {
    this.message = message;
  }


  newMinor() {
    this.minor++;
    console.log(this.childDom.childMes);
    this.childDom.run()
  }

  newMajor() {
    this.major++;
  }

  toOrder(){
    this.route.navigate(['/order',2])
  }
}
