import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { Layout, } from 'antd';
import { NavLink } from 'react-router-dom';
import { SettingOutlined } from "@ant-design/icons";
import { useAppSelector } from '../../hooks';
import cnBind from 'classnames/bind';
const cx = cnBind.bind(styles);


export const Header: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isEbuchka, setEbuchka] = useState(false);
    const { collapsedSider } = useAppSelector((state) => state.generalConditions);
console.log(isEbuchka, 'isEbuchka', collapsedSider," collapsedSider ", screenWidth , "creenWidth")
    useEffect(() => {
        if (!collapsedSider && screenWidth > 600 && screenWidth < 900) {setEbuchka(true)}else setEbuchka(false)
    }, [collapsedSider, screenWidth]);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);

    return <Layout.Header className={cx(styles.wrapper, {wrapper_ebuchka: isEbuchka })}>
        <NavLink className={styles.link} to={""}>Главная</NavLink>
        <button type="button" className={cx(styles.setting, {setting_ebuchka: isEbuchka })}> <SettingOutlined className={cx(styles.ico)} />  Настройки</button>
        <button type="button" className={styles.setting_small}> <SettingOutlined />  </button>
        <span className={cx(styles.title, {title_ebuchka: isEbuchka })} >Приветствуем тебя в CleverFit— приложении, <br />которое поможет тебе добиться своей мечты!</span>
    </Layout.Header>
};
