import React, { Component } from 'react'
import { Button } from 'antd';

class Animal {
  type: string
  name: string
  _age: number
  sex: string
  constructor(type: string, name: string, age: number, sex: string){
    // 实例成员
    this.type = type
    this.name = name
    this._age = age
    this.sex = sex
  }
  get age() {
    return this._age + '岁'
  }
}
const animal = new Animal('狗', '来福', 3, '公')
console.log( animal, "animal", animal._age)
/* 
  public：默认为public
  private：可以被继承，但是无法在实例中访问
  protected：与private类似，但是当构造函数时protected时，无法实例化，只能被继承
  readonly：只读属性，无法被修改/克隆
  static：静态属性，不能被实例访问，在类里面访问时，需要加上类名
*/
class Person {
  name: string
  age: number = 18
  // 构造函数
  constructor(name: string, age?: number) {
    this.name = name
  }
  speak() {
    alert(this.name + ' makes a noise')
  }
}
// 个人
class Individual extends Person {
  sex: string
  constructor(name: string, sex: string, age?: number,){
    super(name, age)
    this.sex = sex
  }
  parentSpeakFun() {
    this.speak()
  }
  static aa() {
    console.log("Individual static aaa");
  }
  bb() {
    console.log('Individual bb', this);
    Individual.aa()
  }
}
// 静态成员
class Test {
  // a 在原型链上
  static a = 1
  // 初始化器，会自动放到 constructor 中去
  b = 2
  c: number
  constructor(){
    // 自动放到类似于
    // this.b = 2
    this.c = 3 + Test.a + this.b
  }
  // 不在原型链上
  print = () => {
    console.log( this.c )
  }
}
let test = new Test()
console.group(`test`, test)
  const pt = test.print
  console.log(`pt`, pt())
console.groupEnd()


/* 类的继承 */


/* 装饰器 */
/* 装饰器函数 */
function changeDecorator(target:any, methdName:any, descriptor:any) {
  console.log( 1221, target, methdName, descriptor )
  // target.
  // return '12'
}

class MyDecorator {
  name: string = '装饰器'
  // 装饰器
  @changeDecorator
  age() {
    return 112
  }
}
let myDe = new MyDecorator()
console.group('decorator', myDe);




export default class ClassLearn extends Component {

  render() {
    return (
      <div>
        <Button onClick={() => {
          const person = new Person('tlx')
          const individual = new Individual('tlx2', "man") 
          console.log( person, 'person', individual );
          // person.speak()
          // individual.speak()
          individual.parentSpeakFun()
          individual.bb()
        }}>class speak</Button>
    
      </div>
    )
  }
}
