import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logIndex: number = 0
  name: string;
  oldName: string;
  logIt(msg: string) {
    console.log(`#${this.logIndex++} ${msg}`);
  }
  constructor() {
    this.logIt('name的属性在constructor里的值是:' + name); // 除了使用简单的值,对局部变量进行初始化之外,这里应该什么都不做
  }

  ngOnChanges(changes: SimpleChanges): void { //该组件若设置了数据绑定输入属性时调用,或被绑定的输入属性的值发生变化时调用.若没有数据绑定输入属性则该方法不会被调用.
    let name = changes['name'].currentValue;
    this.logIt('name的属性在constructor里的值是:' + name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');// 初始化数据或者请求数据应该放在这里.切勿不要将dom的操作放在这里
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck'); // 发生Angular无法或者不愿意自己检测的变化时做出的反应. 我的理解是,初次调用时因为数据渲染,之后将会被频繁被调用的一个钩子,即便只是点击了input框也会被调用.
    //用特定事件发生时才触发业务逻辑.例子
    if (this.name !== this.oldName) {
      console.log(`从${this.oldName}变为${this.name}`);
      this.oldName = this.name;
    }
  }

  ngAfterContentInit(): void {// 当把内容投影进组件之后调用
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void { //每次完成被投影组件内容的变更检测之后调用.
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit(): void { //每次做完组件视图和子视图之后调用.对dom的操作应该放在这里
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {// 每次做完组件视图和子视图变更检测时候调用
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void { // 组件销毁时被调用
    this.logIt('ngOnDestroy');
  }

}
