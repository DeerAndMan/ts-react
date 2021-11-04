import React, { Component } from 'react'

import ProxyDefineProperty from '@/components/Api/ProxyDefineProperty';
import ClassLearn from '@/components/Api/ClassLearn';
import DecoratorTs from '@/components/Api/DecoratorTs';

export default class Api extends Component {
  render() {
    return (
      <div>
        <h2>ES6 proxy 的基本学习：</h2>
        <ProxyDefineProperty />
        <h1>ES6 class 基本学习：</h1>
        <ClassLearn />
        <DecoratorTs />
      </div>
    )
  }
}
