import React from "react"
import { BrowserRouter, NavLink,
    Switch, Route, Redirect 
} from 'react-router-dom';
import routers from './Router';

import styles from '@assets/Router.module.less';

import loadable from '@loadable/component'
const Error = loadable(() => import('@components/Error'))
// const TableResize = loadable(() => import('@common/TableResize'))

// 根据条件生成相应的组件
const RouteList = (route:any) => {
    // console.log('route', route);
    if( !route.path ) return <Route component={Error} />
    return (
        <Route 
            exact
            strict
            path={route.path}
            render={ props => (
                route.redirect ?
                    // push 重定向会将新条目推入历史记录，而不是替换当前条目
                    <Redirect push to={route.redirect} from={route.path}></Redirect> :
                    <route.component {...props} routes={route.routes} />
            )}
        />
    )
}


export const BasicRoute = () => {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    {
                        routers.map((item, index) => {
                            // console.log(item, index);
                            return(
                                <li key={index} className={styles['nav_li']}>
                                    <NavLink 
                                        strict
                                        to={item['path']}
                                        activeClassName="MY__nav__selected"
                                    >
                                        {item['name']}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            
            <main>
                {/* <Switch>通过查找所有的子<Route>并渲染与当前URL匹配的第一个<Route>的内容 */}
                <Switch>
                    
                </Switch>
                { // 动态路由加载
                    routers.map( (route:any, i:number) => <RouteList key={i} {...route} /> )
                }
            </main>
            
            
            {/* <Switch>
				<Route exact path={'/tableResizable'}>
					<TableResize />
				</Route>
				<Route exact path={'/error'}>
					<Error />
				</Route>
			</Switch> */}

        </BrowserRouter>
    )
}
export default BasicRoute