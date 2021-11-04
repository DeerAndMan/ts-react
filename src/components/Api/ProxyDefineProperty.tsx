import React from "react"

/**
 * ES5 DefineProperty 与 ES6 proxy 的学习
 */


/* 
    Object.defineProperty(obj, prop, desc)
    obj：需要定义属性的当前对象
    prop：当前需要定义的属性名
    desc：属性描述符
*/
let Person = {
    names: 'Jocker',
    values: 333
}
let temp = 333
// 使用代理来动态的改变数据
Object.defineProperty(Person, 'values', {
    get: function() {
        return temp + ' Object.defineProperty 修改'
    },
    set: function(value) {
        temp = value
    }
})
// 设置值
Person.values = 456
// 获取值
console.log('Person', Person );


/** Proxy 属于一种‘元编程’
 * Proxy 构造函数
 */
const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
}
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.groupEnd()
const proxy:any = new Proxy(employee, {
    get: function(target:any, propKey:any) {
        console.log( target, propKey );
        if( propKey in target ){
            return target[propKey];
        } else {
            throw new ReferenceError(`Error ${propKey}`);
        }
    }
    
});
console.log('proxy', proxy);
// console.log( proxy.age );


class ProxyDefineProperty extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = {
			title: "ts",
            name: 'Test',
            value: 123,
            ...Person
		}
    }

    componentDidMount() {
        // console.log( this.state );
    }

    render() {
        return(
            <React.StrictMode>
                { Object.values(this.state) }
            </React.StrictMode>
        )
    }
}
export default ProxyDefineProperty