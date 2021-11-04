# tsconfig.json的配置选项
**创建时间：2021-10-04**

1. include 用来指定哪些ts文件需要编译
```js
  {
    "compilerOptions": {
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

