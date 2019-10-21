import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  _data: Array<string>
  changeLog: Array<string> = [];
  childMes: string = 'this is child';
  birthDate:Date = new Date();
  @Input() major: number;
  @Input() minor: number;
  @Input() runNewMinor: Function;
  @Input() home: any;

  @Input() set childData(data: Array<string>) { //childData是我们用来接收父组件传递过来的数据的一个变量，我们用setter来截取到这个变量，然后做一些修改，childData这个变量名,
    //它是取决于父组件app.component.html里面的[childData]="parentData"，不能随便改动
    this._data = data || ['css', 'js']; //如果data为false的值(如空字符串,undefined,null),给_data赋值为['css','js']。
  }

  @Output() message = new EventEmitter<string>() //这里的message是可以自己定义的.需要注意这里OutPut的名字.需要跟向父组件传递的名字保持一致

  putToPatent() {
    this.message.emit('This is child');
  }

  run() {
    alert("this is child's function")
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) { //changes是一个SimpleChanges类型的参数，键值为属性名的数组
    let log: string[] = [];
    for (let key in changes) {
      if (key == 'major' || key == 'minor') {
        let changedProp = changes[key]; //首次加载页面ngOnChanges方法也会执行,此时changedProp 有两个个属性,currentVue,firstChange.
        //当第二次触发ngOnChanges,changeProp有三个属性,分别是previousValue,currentValue,firstChange.只有第一次firstChange是true,之后firstChange都是false.
        let from = JSON.stringify(changedProp.previousValue);
        let to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of ${key} set to ${to}`);
        } else {
          let from = JSON.stringify(changedProp.previousValue);
          log.push(`${key} changed from ${from} to ${to}`);
        }
      }
    }
    this.changeLog.push(log.join(', '));
  }



  get child(): Array<string> { //用get重新获取重置过后的_data变量
    return this._data;
  }
  constructor() { }

  ngOnInit() {

  }

}

// export declare class SimpleChange {
//   previousValue: any;
//   currentValue: any;
//   firstChange: boolean;
//   constructor(previousValue: any, currentValue: any, firstChange: boolean);
//   isFirstChange(): boolean;
// }
