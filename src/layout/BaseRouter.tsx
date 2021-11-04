import React from 'react'
import {
  Switch,
  Route, Redirect, Router
} from 'react-router-dom';
import loadable from '@loadable/component'
import routers from '@/router/Router';

const TableResize = loadable(() => import('@common/TableResize'))
const Error = loadable(() => import('@components/Error'))

interface router {
  path:string,
  name:string,
  component:any,
  redirect?: string
  children?:Array<router>
}

// 根据条件生成相应的组件
const RouteList = (route:any) => {
  if( !route.path ) return <Route component={Error} />
  return (
    <Route 
      exact
      strict
      path={route.path}
      render={ props => {
        // console.log("route", route.routes);
        return(
          route.redirect ?
            // push 重定向会将新条目推入历史记录，而不是替换当前条目
            <Redirect push to={route.redirect} from={route.path}></Redirect> :
            <route.component {...props} routes={route.routes} />
        )
      }}
    />
  )
}
const r_Router = (item: router) => {
  return (
    <Route
      exact
      strict
      key={ item.path }
      path={item.path}
      // component={(props:any) => {
      //   return(
      //     item.redirect // push 重定向会将新条目推入历史记录，而不是替换当前条目
      //     ? <Redirect push to={item.redirect} from={item.path}></Redirect>
      //     : <item.component {...props} routes={ item } />
      //     // return <route.component {...props} routes={route.routes} />
      //   )
      // }}
      render={(props:any) => {
        return(
          item.redirect // push 重定向会将新条目推入历史记录，而不是替换当前条目
          ? <Redirect push to={item.redirect} from={item.path}></Redirect>
          : <item.component {...props} routes={ item } />
          // return <route.component {...props} routes={route.routes} />
        )
      }}
      
    >
    </Route>
  )
}



export default function BaseRouter() {
  return (
    <React.StrictMode>
      {/* 动态路由加载 */}
      {/* { routers.map( (route:any, i:number) => <RouteList key={i} {...route} /> ) } */}
      <Switch>
        {
          routers.map( (item: router) => {
            // console.log( item, 'item' );
            if( item.children ){
              // return r_Router( item )
              return item.children.map( chil => {
                return r_Router( chil )
              })
            } else {
              return r_Router( item )
            }
          })
        }
        <Route path="/dynamicRouter/link2" component={ TableResize } />
        <Route exact path={'/error'}>
					<Error />
				</Route>
      </Switch>
      {/* <Switch>
				<Route exact path={'/tableResizable'}>
					<TableResize />
				</Route>
				<Route exact path={'/error'}>
					<Error />
				</Route> 
			</Switch> */}

    </React.StrictMode>
  )
}
