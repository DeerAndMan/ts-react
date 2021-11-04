# [react-router-dom 的基本使用](https://segmentfault.com/a/1190000039190541)
***创建时间 2021-09-09***

#### React Router 附带了一些HOOK，可以访问路由器的状态并从组件内部执行导航
1.  useHistory: 钩子返回history对象，可以使用 `useHistory` 进行导航
    ``` js
        import { useHistory } from "react-router-dom";
        function HomeButton() {
            let history = useHistory();
            function handleClick() {
                history.push("/home");
            }
            return (
                <button type="button" onClick={handleClick}>
                    Go home
                </button>
            );
        }
    ```
2.  useLocation: 钩子返回当前URL的location对象。类似于useState,每当URL发生变化时，它都会返回一个新的位置。
    ``` js
        import { useLocation } from "react-router-dom";
        let location = useLocation();
        console.log( location, 'location' )
    ```
3.  useParams: 动态参数列表的引用对象，用于获取`<Route>`中的 `match.params`(动态参数)
    ``` js
        import { useParams } from "react-router-dom";
        let { slug } = useParams();
        console.log( slug, 'slug' )
    ```
4.  useRouteMatch: 尝试以与 `<Route>` 相同的方式匹配当前URL。它主要用于访问匹配数据，而无需实际渲染 `<Route>`。
    ``` js
        import { useRouteMatch } from "react-router-dom";
        const BlogPost = () => {
            let match = useRouteMatch("/blog/:slug")
            return <div />
        }
        // 
    ```
    + useRouteMatch 钩子也可以
    + 不接受任何参数并返回当前`<Route>`
    + 接收单个参数，与matchPath 的 props 参数相同。它可以是一个字符串形式的路径名（上面例子），也可以是一个带有匹配道具的对象
    ``` js
        const match = useRouteMatch({
            path: '/blog/:slug',
            strict: true,
            sensitive: true
        })
    ```


#### `<BrowserRouter>` 使用HTML5 History API 来保证UI组件和URL同步
    ``` js
        <BrowserRouter
            basename={optionalString}
            forceRefresh={optionalBool}
            getUserConfirmation={optionalFunc}
            keyLength={optionalNumber}
        >
            <App />
        </BrowserRouter>
    ```
1.  basename`<string>`: 基准URL，如果你的应用程序是从服务器上的子目录中提供的，你需要将其设置为子目录。一个正确格式化 basename 应该有一个开头斜杠，但没有结尾斜杠。
2.  getUserConfirmation`<function>`: 用于确认路由跳转的函数。默认使用 `window.confirm`
3.  forceRefresh`<boolean>`: 如果值为 true 路由跳转将会刷新整个页面。可以使用它来模拟传统服务器渲染应用程序，路由跳转之间刷新页面的工作方式。
4.  keyLength `<element>`: location.key的长度。默认为6
5.  children `<element>`: 要渲染的子元素


#### `<HashRouter>` 使用Hash模式路由来保证UI组件和URL同步
    ``` js
    ** 重要说明: Hash模式不支持 location.key 或 location.state。推荐配置服务器以供使用 `<BrowserHistory>` **
    <HashRouter
        basename={optionalString}
        getUserConfirmation={optionalFunc}
        hashType={optionalString}
    >
        <App />
    </HashRouter>
    ```
1.  hashType `<string>`: window.location.hash 的编码类型。
    + 'slash'       -类似 #/ 或 #/sunshine/lollipops
    + 'noslash'     -类似 # 或 #sunshine/lollipops


### `<Link>` 提供声明式，可访问的导航
    ``` js
        <Link to="/about"> About </Link>
    ```
1.  to
    + `<string>`: 链接路径的字符串形式，由路由路径，搜索参数和Hash属性构成
        ``` js
            <Link to="/course?sort=name" />
        ```
    + `<object>`:
        + pathname: `<string>`表示要链接到的路径
        + search: `<string>`查询参数
        + hash: 一个放在URL中的Hash，例如 #a-hash
        + state: location.state 参数
    + `<function>` 将当前路由信息作为参数传递，该函数返回 string 或者 Object
        ``` js
            <Link to={location => ({ ...location, pathname: '/courses' })} />
            <Link to={location => `${location.pathname}?sort=name` />
        ```
2.  replace `<boolean>`: 如果为true，单击链接时将替换当前历史条目，而不是添加新条目
    ``` js
        <Link to="/courses" replace />
    ```


### `<NavLink>` 特殊的`<Link>`，当它匹配当前URL时，它会为当前处于激活状态链接添加样式
    ``` js
        <NavLink to="/about">About</NavLink>
    ```
1.  activeClassName `<string>`: 元素处于活动状态时提供的class样式。默认的类名称是active。这将与className连接
    ``` js
        <NavLink to="about" activeClassName="selected">About</NavLink>
    ```
2.  activeStyle `<object>`: 当元素处于活动状态时应用于元素的内联style样式
    ``` js
        <NavLink to="/about"
            activeStyle={{
                fontWeight: 'bold',
                color: 'red'
            }}
        > About
        </NavLink>
    ```
3.  strict `<boolean>`: 如果为true，URL匹配时使用严格模式，路径的末尾斜杠也会匹配。
4.  isActive `<function>`: 用于添加额外的逻辑以确认链接是否活动状态。如果您想要做的不仅仅时验证链接的路径名与当前URL的路径名是否匹配，那么久应该使用这个方法。
5.  location `<object>`: isActive一般用于比较当前的历史位置（通常是当前浏览器的URL）。为了与不同的位置进行比较，可以传递一个location
6.  aria-current `<string>`: 在活动链接上使用的是 aria-current 属性的值。可用值
    + "page":       用于指定一组分页链接中的链接
    + "step":       用于指示基于步骤的进程的步骤指示器中的链接
    + "location":   用于指示在视觉上高亮显示为流程图的当前组件的图像   
    + "date":       用于指示日历中的当前日期
    + "time":       用于指示时间表中的当前时间
    + "true":       用于指示导航链接是否处于活动状态
    + "false":      用于防止辅助技术对当前链接做出反应（用例是在一个页面上阻止多个aira-current标签）


### `<Prompt>`: 用于在离开页面之前提示用户。当您的应用程序进入应阻止用户导航的状态时（例如，表单已被半填满），请渲染 `<Prompt>`
``` js
    <Prompt
        when={formIsHalfFilledOut}
        message="您确定要离开吗？"
    />
```



