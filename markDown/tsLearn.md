# 基础的TS学习
**创建时间：2021-09-28**

## 类型
- number    1, -33, 2.5         任意数字
- string    "Hi","h1","1"       任意字符串
- boolean   true, false         布尔值true或false
- 字面量     其本身（所写的值）     限制变量的值，就是该字面量的值
- any       *                   任意类型，不建议使用
- unknown   *                   任意类型
- void      空值（undefined）    返回，没有值（或undefined）
- never     没有值               返回，不能是任何值
- object    {name: "test"}      任意的JS对象
- array     [1,2,3]             任意的JS数组
- tuple     [4,5]               元素，TS新增类型，固定长度的数组
- enum      enum(A, B)          枚举，TS中新增类型

***any 与 unknown 的区别***
1. any类型的值赋值到其他的变量上时，同时会将这个变量也变成any类型。不建议使用
2. unknown 只会将本身赋任意值，不能直接赋值给其他变量
``` ts
    let e:unknown
    let s:string = '1111'
    e = 'hello'
    // 类型断言，可以用来告诉解析器变量的实际类型
    s = e as string
    或 s = <string>e
```
***对象 object***
```ts
    // [propName: string]: any 存在时，可以有任意类型
    // 当存在不确定的属性时, propName可以写成任意名称，类型未字符串，值为任意类型
    let a = { name: string, age?: number, [propName: string]: any }
    // 设置函数结构的类型声明，返回一个数值
    // 语法 (形参：类型， 形参：类型 ...可以有多个) => 返回值
    let b: (name1: number, name2: number ) => number

```
***数组 array***
```ts
    let c: string[]
    let d: Array<number>
```
***元组 tuple***
```ts
    // 元组：元组就是固定长度的数组
    // 语法：[类型，类型]
    let e: [string, number]
    e = ['name', 123]
```
***枚举 enum***
```ts
    // 枚举：
    // 
```


## 面向对象
1. 类
```js
    
```
