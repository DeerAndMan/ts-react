# TS 学习

***创建时间  2021-10-15***

创建一个`ts`类型的react文件

`create-react-app fileName --typescript`

## 使用原则

***创建时间 2021-04-10***

------

***在React中使用 `ts` 的几点原则和变化***

1. 所有用到 `jsx` 语法的文件都需要以 `tsx` 后缀命名
2. 使用组件声明时的 `Component<p, s>` 泛型参数声明，来代替 `PropTypes`
3. 全局变量或则自定义的window对象属性，统一在项目根下 中进行声明定义
4. 对于项目中常用到的接口数据对象，在`types/`目录下定义好其结构化类型声明







## ts 配置文件

------

1. 初始化ts配置：tsc --init
2. @types是一个ts官方的类型库，其中包含了很多对JS代码的类型描述

```json

{
    "compilerOptions": { // 编译选项
      // 所有严格检查的总开关
      "strict": true,
      // 是否移除注释
      "removeComments": true,
      // 用来设置编译后的文件是否使用严格模式
      "alwaysStrict": true,
      // 当有错误是不生成编译后的文件
      "noEmitOnError": true,
      // 不允许隐式的any类型
      "noImplicitAny": true,
      // 不允许不明确类型的this
      "noImplicitThis": true,
      // 严格的检查空值
      "stricNullChecks": true,

    },
    "include": [
      "./src/**/*" // ** 代表文件夹， * 代表文件
    ]
  }
```

<img src="D:\Desktop\git Filter\ts-lear-react\markDown\image\jsconfig.jpg"  />







## 基础类型

***创建时间：2021-09-28***

------

如何进行类型约束

1. 仅需要 变量、函数的参数、函数的返回值位置上加上 `:类型`
2. 

### 全部类型

| 基础类型  |        演示        |                        描述                        |
| :-------: | :----------------: | :------------------------------------------------: |
|  number   |    1, -33, 2.5     |                      任意数字                      |
|  string   |   "Hi","h1","1"    |                     任意字符串                     |
|  boolean  |    true, false     |                 布尔值true或false                  |
|   null    |                    |                                                    |
| underfind |                    |                                                    |
|  字面量   | 其本身（所写的值） |           限制变量的值，就是该字面量的值           |
|    any    |         *          |                任意类型，不建议使用                |
|  unknown  |         *          |                      任意类型                      |
|   void    | 空值（undefined）  |  约束函数的返回值不返回值，没有值（或undefined）   |
|   never   |       没有值       |   约束返回值，不能是任何值。该函数永远不可能结束   |
|  object   |   {name: "test"}   |                    任意的JS对象                    |
|   array   |      [1,2,3]       |                    任意的JS数组                    |
|   tuple   |       [4,5]        | 元素，TS新增类型，固定长度的数组，每一项的类型确定 |
|   enum    |     enum(A, B)     |                 枚举，TS中新增类型                 |

### any 与 unknown 的区别

1. any类型的值赋值到其他的变量上时，同时会将这个变量也变成any类型。不建议使用

2. unknown 只会将本身赋任意值，不能直接赋值给其他变量

   ```tsx
    		let e:unknown
       let s:string = '1111'
       e = 'hello'
       // 类型断言，可以用来告诉解析器变量的实际类型
       s = e as string
       或 s = <string>e
   ```

### 对象 object

```tsx
  	// [propName: string]: any 存在时，可以有任意类型
    // 当存在不确定的属性时, propName可以写成任意名称，类型未字符串，值为任意类型
    let a = { name: string, age?: number, [propName: string]: any }
    // 设置函数结构的类型声明，返回一个数值
    // 语法 (形参：类型， 形参：类型 ...可以有多个) => 返回值
    let b: (name1: number, name2: number ) => number
    
    
```

### 数组 array

```tsx
		// 元组：元组就是固定长度的数组
    // 语法：[类型，类型]
    let e: [string, number]
    let a: number[]
    let b: Array<number>
    e = ['name', 123]
```

### null 和 underfind

1. null 和 underfind 是所有其他类型的子类型，它们可以赋值给其他类型。

2. 通过添加 `strictNullChecks: true`,可以获得更严格的空类型检查，null 和 underfind 只能赋值给自身。

   ```
   let a: underfind = underfind
   ```

### 枚举 enum

```ts
// 定义一个枚举:
enum 枚举名 {
  枚举字段1 = 值1,
  枚举字段2 = 值2,
  ...
}
// 枚举会出现在编译结果中，编译结果中表现为对象
// 枚举的规则
  枚举的字段值可以是字符串或数字
 	数字枚举的值自动自增
	被数字枚举约束的变量，可以直接赋值为数字
  数字枚举的编译结果 和 字符串枚举有差异

  enum Gender{
    male = '男',
    female = '女'
  }
  let gender: Gender
  gender = Gender.female

 
```

### 类型别名

1. 对已知的一些类型定义名称

2. 扩展类型：类型别名、***枚举、接口、类***

   ```ts
   type 类型名 = ...
   type User = {
   	name: string
   	age: number,
   	gender: "男" | "女"
   }
   let u: User
   ```

### 函数的相关约束

1. 函数重载：在函数实现之前，对函数调用的多种情况进行声明
2. 可选参数：可以再某些参数名后加上问号，表示该参数可以不传递

```ts
// 约束，函数重载
  /**
   * 得到 a * b的结果
   * @param a 
   * @param b 
   */
  function combine(a: number, b:number): number;
  /**
   * 得到 a + b 的结果
   * @param a 
   * @param b 
   */
  function combine(a: string, b:string): string;
  // 函数的相关约束
  function combine(a:number|string, b:number|string): number|string{
    if(typeof a === 'number' && typeof b === 'number') {
      return a * b
    }
    else if( typeof a === 'string' && typeof b === 'string' ) {
      return a + b
    }
    throw new Error("a 和 b 必须是相同的类型");
  }
  let result = combine(3, 3)
  console.log("combine 函数相关约束", result)
```







## 接口

***创建时间 2021-10-24***

------

TypeScript的接口：用于约束类、对象、函数的契约（标准）。

和类型别名一样，接口，不出现在编译结果中

1. 接口约束类

2. 接口约束对象

3. 接口约束函数

4. 接口可以继承

   1. 可以通过接口之间的继承，实现多种接口的组合
   2. 接口的继承 与 交叉类型 的区别
      - 交叉类型子接口不能覆盖父接口的成员
      - 交叉类型会把相同成员的类型进行交叉

   ```tsx
   // 对象接口约束
   interface User{
     name: string
     age: number
   }
   const u: User = {
     name: '改接口用来约束对象',
     age: Math.random()
   }
   ```

5. readonly 修饰符 关键字，自读属性不在编译结果中

   ```tsx
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
   ```

6. 类型兼容

7. 2

8. 3

9. 6-4

   

   













## 类 class

***创建时间：2021-10-14***

### 传统的构造函数的问题

```ts
1. 属性和原型方法定义分离，降低了可读性
2. 原型成员可以被枚举
3. 默认情况下，构造函数仍然可以被当作普通函数使用
```

### 类的特点

    1. 类声明不会被提升，与 let 和 const 一样，存在暂时性死区
    2. 类中的所用代码均在严格模式下执行
    3. 类的所有方法都是不可枚举的
    4. 类的所有方法都无法被当作构造函数使用
    5. 类的构造必须使用 new 来调用

### 类

1. 可计算的成员名

   ```ts
     class Animal {
       constructor(type, name, age, sex){
         this.type = type
         this.name = name
         this.age = age
         this.sex = sex
       }
       [printName]() {
         console.log(`种类：${this.type}`)
       }
     }
     const a = new Animal('狗', '来福', 3, '公')
     a[printName]()
   ```

2. getter 和 setter

     1. Object.defineProperty可定义某个对象成员属性的读取和设置

     2. 使用 getter 和 setter 控制的属性， 不在原型上

        ```ts
         class Animal {
            constructor(type, name, age, sex){
        	// 实例成员        
              this.type = type
              this.name = name
              this.age = age
              this.sex = sex
            }
            // 创建一个age属性，并给它加上getter，读取该属性时，会运行该函数
            get age() {
              return this._age+'岁'
            }
            // 创建一个age属性，并给它加上setter，给该属性赋值时，会运行该函数/*  */
            set age(age) {
              if(typeof age !== 'number'){
                throw new TypeErrof("age must be a number")
              }
              if(age<0) age = 0
              else if(age>1000) age = 1000
              this._age = age
            }
            [printName]() {
              console.log(`种类：${this.type}`)
            }
          }
          const a = new Animal('狗', '来福', 3, '公')
          a[printName]()
        ```

3. **静态成员** 

   ```ts
   1. 构造函数本身的属性(成员)
   2. 静态成员不依赖具体对象，只与类本身相关
      **字段初始化器（ES7）** 
   class Chess {
     constructor(name){
    		// 实例成员   
       this.name = name
     }
     // 静态成员，字段（属性）初始化器
   	// 静态成员不会每次 new 的时候都创建 ？  
     static width = 50;
   	static height = 50;
     static method() {};
   }
   // 实例成员 与 静态成员 的问题
   ```

4. 字段初始化器（ES7）

   1. 使用`static`的字段初始化器，添加的是静态成员（//在原型链上）
   2. 没有使用`static`的字段初始化器，添加的成员位于对象上（new 后的对象上）
   3.  箭头函数在字段初始化器位置上，指向当前对象（new 后的对象上）

5. 类表达式

   ```ts
   cosnt A = class {
     a = 1;
     b = 2
   }
   const a = new A()
   ```

6. [扩展]装饰器（ES7）

   装饰器（Decorator）是一种与类（class）相关的语法，用来**注释或修改类和类方法**

   1. 修饰器：其实就是一个函数包装成另一个函数

   2. **装饰器本质是编译时执行的函数**。编译器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。

   3. 横切关注点

   4. 装饰器的本质上是一个函数 `@ + 函数名`

        - 声明一个类有两种方法：`target: Function` `target: new () => object`

        ```ts
        class Test {
          @Obsolete
          print() {
            console.log("print方法")
          }
        }
        function Obsolete(target: new (...arg: any[]) => object, methdName, descriptor){
          console.log( target, methdName, descriptor )
        }
        ```

        





### 类的类型

    1. public：默认为public
    2. private：可以被继承，但是无法在实例中访问
    3. protected：与private类似，但是当构造函数时protected时，无法实例化，只能被继承
    4. readonly：只读属性，无法被修改/克隆
    5. static：静态属性，不能被实例访问，在类里面访问时，需要加上类名

```ts
interface --- 接口只声明成员方法，不做实现
class --- 类声明并实现方法

```





### 类的继承

​	创建时间 2021-10-17

​	如果两个类A和B，如果可以描述为：B 是 A，则 A 和 B 形成继承关系

​	如果 B 是 A，则：

1. B 继承自 A
2. A 派生 B
3. B 是 A 的子类
4. A 是 B 的父类

如果 A 是 B 的父类，则 B 会自动拥有 A 中的所有实例成员

新的关键字

- extends：继承，用于类的定义（定义父类）

- super

  - 直接当作函数调用，表示父类构造函数

  - 直接当作对象使用，则表示父类的原型

    

注意：ES6要求，如果定义了 construction，并且该类是子类，则必须在construction的第一行手动调用父类的构造函数

如果子类不写construction，则会有默认的构造器，该构造需要的参数和父类一致，并且自动调用父类构造器

抽象类：一般是父类，不能通过该类创建对象。使用 new.target 判断

正常情况下：this的指向，this始终指向具体的类的对象（指向运行时的状态）



### 装饰器

#### 类装饰器

#### 成员装饰器

------

1. 属性
   1. 如果是静态属性，则为类本身。如果是实例属性，则为类的原型
   2. 固定一个字符串，表示属性名
2. 方法







## 泛型

***创建时间 2021-11-02***

------

泛型（Generics）是指在定义函数、接口或类的时候，不预先制定具体的类型，而在使用的时候在指定类型的一种特性。













































