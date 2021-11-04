import React, { Component } from 'react'


// class Test {
//   name: string = 'test name';
//   static age: number = 18;
//   constructor(name: string){
//     this.name = name
//   }

//   change_p_name(name: string) {
//     return this.name + " 父类改变名称方法 change_p_name =>>" + name
//   }
// }
// const test = new Test('1')
// const test1 = new Test('2')
// console.log( 'new Test', test, test1 );

// class TestChil extends Test {
//   name = 'chil 的名称  '
//   sex: string
//   constructor(name: string, age: number, sex: string){
//     super(name)
//     this.name += this.change_p_name(name)
//     Test.age += age
//     this.sex = sex
//   }
// }
// const testChil = new TestChil('涂刘祥', 123, '男')
// console.log('testChil', testChil);


// function testDecorator(target: Function){
//   new target()
// }

// 
type constructor = new (...arg: any[]) => object
function testDecorator(target: new (...arg: any[]) => object){
  console.log( 456789, target )
}
function testB(...args: string[]){
  return function(target: constructor){
    console.log('类装饰器 B', args, new target())
  }
}


function name(target: any, key: string) {
  console.log('属性装饰器', target, key)
}


@testDecorator
@testB('/router', 'say hello',)
class A {
  @name
  typeName: string
  constructor(name: string){
    this.typeName = name
  }
}
console.log('基本的装饰器的使用', new A("向装饰器中传递参数"))


export default class DecoratorTs extends Component {
  render() {
    return (
      <div>
        <h3>TS 装饰器 的基本使用</h3>


      </div>
    )
  }
}
