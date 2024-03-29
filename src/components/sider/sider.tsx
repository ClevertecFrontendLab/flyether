import React, { useEffect, useState } from 'react';
import cnBind from 'classnames/bind';
import styles from './style.module.css';
import logo from '../../assets/svg/logo.svg';
import cap from '../../assets/svg/cap.svg';
import fit from '../../assets/svg/fit.svg';
import exit from '../../assets/svg/exit.svg';
import { Layout, Menu, MenuProps } from 'antd';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/'
import { setCollapsedSider } from '@redux/slices/GeneralConditionsSlice';

const cx = cnBind.bind(styles);
const { Sider } = Layout;

export const Side = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useAppDispatch();
    const [collapsedWidth, setCollapsedWidth] = useState(64);
    const [wight, setWight] = useState(208);
    const [isDataTextButton, setDataTextButton] = useState('sider-switch');
    const { screenWidth } = useAppSelector((state) => state.generalConditions);

    useEffect(() => {
        if (screenWidth >= 650) { 
            setDataTextButton('sider-switch')
            setWight(208)
            setCollapsedWidth(64)
        }
        if (screenWidth < 650) {
            setDataTextButton('sider-switch-mobile')
            setCollapsedWidth(0)
            setWight(106)
        }
    }, [screenWidth]);

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e.key);
    };

    const hendleCollapsed = () => {
        setCollapsed(!collapsed)
        dispatch(setCollapsedSider(!collapsed))
    };

    return (
        <Sider breakpoint={"lg"} collapsedWidth={collapsedWidth} width={wight} className={cx(styles.sider, { sider_open: !collapsed })} trigger={null} collapsible collapsed={collapsed}>

            <div className={styles.sider_div}>
                <img alt='logoLage' src={collapsed ? fit : logo} className={cx({ img_open: !collapsed, img: collapsed })} />

                <Menu
                    theme="dark"
                    mode="inline" defaultSelectedKeys={['1']}
                    className={cx({ menu_open: !collapsed, menu: collapsed })}
                    onClick={onClick}
                    items={[
                        {
                            key: '1',
                            icon: screenWidth > 650 ? <CalendarTwoTone className={styles.ico} twoToneColor='#003a8c
              '/> : '',
                            label: collapsed ? '' : 'Календарь',
                        },
                        {
                            key: '2',
                            icon: screenWidth > 650 ? <HeartFilled className={styles.ico} /> : '',
                            label: collapsed ? '' : 'Тренировки',
                        },
                        {
                            key: '3',
                            icon: screenWidth > 650 ? <img alt='cap ico' src={cap} className={styles.ico} /> : '',
                            label: collapsed ? '' : 'Достижения',
                        },
                        {
                            key: '4',
                            icon: screenWidth > 650 ? <IdcardOutlined className={styles.ico} /> : '',
                            label: collapsed ? '' : 'Профиль',
                        },
                    ]}
                />
            </div>
            <div className={cx(styles.exit_div, { block: collapsed && screenWidth < 650, border_none: collapsed && screenWidth < 650 })} >  {screenWidth < 650 ? "" : <img alt='exit ico' src={exit} className={styles.ico} />}  {collapsed ? '' : 'Выход'} </div>
            <button className={styles.button} data-test-id={isDataTextButton} type='button' onClick={hendleCollapsed}>{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: styles.trigger,
                // onClick: () => setCollapsed(!collapsed),
            })}</button>
        </Sider>
    );
};
