

import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

import { Layout, } from 'antd';
import React from 'react';
import { Side } from '../sider/sider';
import { Header } from '../header/header';


export const LayoutApp: React.FC = () =>

  <Layout className={styles.layout}>
    <Side />
    <Layout className={styles.site_layout}>
      <Header />
      <Outlet />
    </Layout>
  </Layout>

