

import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

import { Layout, } from 'antd';
import React, { useEffect, useState } from 'react';
import { Side } from '../sider/sider';
import { Header } from '../header/header';
import { useAppDispatch } from '../../hooks/'
import { setScreenWidth } from '@redux/slices/GeneralConditionsSlice';

export const LayoutApp: React.FC = () => {
const [screenWidth, setScreenWidthState] = useState(window.innerWidth);
const dispatch = useAppDispatch();
useEffect(() => {
  function handleResize() {
    setScreenWidthState(window.innerWidth);
      dispatch(setScreenWidth(window.innerWidth))
  }

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, [dispatch, screenWidth]);

return (
  <Layout className={styles.layout}>
    <Side  />
    <Layout className={styles.site_layout}>
      <Header  />
      <Outlet   />
    </Layout>
  </Layout>
)
}