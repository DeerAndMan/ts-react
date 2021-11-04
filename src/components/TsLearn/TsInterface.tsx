import React, { Component } from 'react'

// 对象接口约束
interface User{
  name: string
  age: number
  // 函数接口
  say: () => void
}

const u: User = {
  name: '该接口用来约束对象',
  age: Math.random(),
  say: () => {
    console.log('hello 函数接口')
  }
}
u.say()

// 函数接口 约束
interface Condition { // 大括号为定界符
  (n: number): boolean
}
function sum(num: number[], cbFN: Condition) {
  let s = 0;
  num.forEach(n => {
    if( cbFN(n) ){
      s += n
    }
  })
  return s
}
console.log("函数接口", sum([1,2,3,5,7], n => n % 2 !== 0) )

// 接口 继承
interface A {
  T1: string
}
interface B extends A {
  T2: number
}
// 接口中可以多继承
interface C {
  T3: boolean
}
interface D extends A, C{

}
let uu:B = {
  T1: '接口继承',
  T2: 12345
}
console.log('接口继承 UU', uu)


// 只读修饰符
interface Userss {
  readonly id: string
  name: string
  readonly arr: readonly number[]
}
let users: Userss = {
  id: '123',
  name: 'tlx',
  arr: [1, 3]
}
// 错误
// users.id = "234"
// users.arr.push(1)
console.log("readonly 修饰符", users)


export default class TsInterface extends Component {
  
  
  
  render() {
    return (
      <div>
        <h2>Ts 接口学习</h2>
        <p>{ u.name }:{ u.age }</p>
      </div>
    )
  }
}
