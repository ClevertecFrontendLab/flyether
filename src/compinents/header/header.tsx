import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { Layout, } from 'antd';
import { NavLink } from 'react-router-dom';
import { SettingOutlined } from "@ant-design/icons";



export const Header: React.FC = () => {
    return    <Layout.Header  className={styles.wrapper}>
    <NavLink className={styles.link} to={""}>Главная</NavLink>
    <button type="button" className={styles.setting}> <SettingOutlined className={styles.ico}/>  Настройки</button>
    <button type="button" className={styles.setting_small}> <SettingOutlined />  </button>
    <span className={styles.title}>Приветствуем тебя в CleverFit— приложении, <br/>которое поможет тебе добиться своей мечты!</span>
        </Layout.Header>
};
