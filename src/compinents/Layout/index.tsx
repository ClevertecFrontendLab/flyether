

import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

import { Layout, } from 'antd';
import React, { useState } from 'react';
import { Side } from '../sider/sider';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


export const LayoutApp: React.FC = () => {


  return (
    <Layout className={styles.layout}>
      <Side/>
      
      <Layout className={styles.site_layout}>
        <Header/> 

       
        <Outlet />

      </Layout>
    </Layout>

  );
};