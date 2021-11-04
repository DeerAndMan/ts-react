import React, {useEffect, useState} from 'react'
import { 
  NavLink,
  useHistory,
} from "react-router-dom";
import Router from '@/router/Router';
import styles from '@/assets/layout/layoutMain.module.less';
import { Menu } from 'antd';

const { SubMenu } = Menu;


interface router {
  path:string,
  name:string,
  component:any,
  redirect?: string
  children?:Array<router>
}
interface MenuClickE {
  keyPath: string[]
  [key: string]: any 
}

const children:any[] = []
const renderMenu = (data: Array<router>):any => {
  return data.map( (item:router) => {
    if( item.children ) {
      return (<SubMenu title={item.name} key={item.path}>
        { renderMenu( item.children ) }
      </SubMenu>)
    } else {
      return (
        <Menu.Item key={ item.path }>
          <NavLink
            strict
            to={ item['path'] }
            // activeClassName="MY__nav__selected"
          >
            {item['name']}
          </NavLink>
        </Menu.Item>
      )
    }
  })
}
children.push( renderMenu(Router) )
console.log( "menu children", children );



export default function BaseNav() {
  const [menuDefault, setMenuDefault] = useState<string[]>(['/'])
  
  let history = useHistory();
  // const location_pathname = history.location.pathname
  
  const menuClick = (e: MenuClickE) => {
    setMenuDefault( e.keyPath )
  }
  useEffect(() => {
    setMenuDefault([ history.location.pathname ])
  }, [ history.location.pathname ])
  return (
    <Menu 
      mode="horizontal" 
      selectedKeys={ menuDefault }
      onClick={ menuClick }
      className={styles['nav__menu']}
    >
      { children }
    </Menu>
  )
}
