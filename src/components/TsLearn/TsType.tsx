import React from 'react'

export default function TsType() {
  /* 基础类型 */
  let a:string = '111'
  function sumAdd(a: number, b: number): number {
    return a * b
  }
  let b = sumAdd(231, 8908)

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
  

  // 枚举
  enum Gender{
    male = '男',
    female = '女'
  }
  let gender: Gender
  gender = Gender.female


  return (
    <div>
      <h1>基础的 TS 类型学习</h1>
      { a }
      <p>{ b }</p>
      <p>combine 函数相关约束: {result}</p>
      <p>使用枚举: { gender }</p>
      
    </div>
  )
}

