# 基础的class学习
**创建时间：2021-10-14**

## 传统的构造函数的问题
  1. 属性和原型方法定义分离，降低了可读性
  2. 原型成员可以被枚举
  3. 默认情况下，构造函数仍然可以被当作普通函数使用
## 类的特点
  1. 类声明不会被提升，与 let 和 const 一样，存在暂时性死区
  2. 类中的所用代码均在严格模式下执行
  3. 类的所有方法都是不可枚举的
  4. 类的所有方法都无法被当作构造函数使用
  5. 类的构造必须使用 new 来调用

## 类

**可计算的成员名**
  ```js
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
**getter和setter** 
  1. Object.defineProperty可定义某个对象成员属性的读取和设置
  2. 使用 getter 和 setter 控制的属性， 不在原型上
  ```js
    class Animal {
      constructor(type, name, age, sex){
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
**静态成员** 
  1. 构造函数本身的属性
  2. 静态成员不依赖具体对象，只与类本身相关
**字段初始化器（ES7）** 

**类表达式**

**[扩展]装饰器（ES7）**

















**类的类型**
  1. public：默认为public
  2. private：可以被继承，但是无法在实例中访问
  3. protected：与private类似，但是当构造函数时protected时，无法实例化，只能被继承
  4. readonly：只读属性，无法被修改/克隆
  5. static：静态属性，不能被实例访问，在类里面访问时，需要加上类名









