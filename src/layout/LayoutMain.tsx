import React from 'react'
import {
  BrowserRouter
} from 'react-router-dom';

import styles from '@/assets/layout/layoutMain.module.less';
import BaseNav from './BaseNav';
import BaseRouter from './BaseRouter';

export default function LayoutMain() {
  return (
    <BrowserRouter>
      <nav 
        className={styles['nav']}
      >
        <BaseNav />
      </nav>
      <main>
        <BaseRouter />
      </main>

    </BrowserRouter>
  )
}
