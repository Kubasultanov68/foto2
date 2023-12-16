import React from 'react';
import sl from './sidebar.module.css';
import {Link, NavLink, useLocation} from "react-router-dom";
import {IoHome, IoHomeOutline, IoNotifications} from "react-icons/io5";
import {MdExplore, MdOutlineExplore} from "react-icons/md";
import {FaSearch} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import {AiFillMessage, AiOutlineMessage} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import logo from './logo.svg';
import {Avatar} from "@mui/material";

const SideLink = ({to, text, Icon, IconActive}) => {

    const styleAvatar = {
        width: '25px',
        height: '25px'
    }

    const {pathname} = useLocation()

    return (
        <NavLink to={to} className={pathname === to ? sl.item_active : sl.item}>
            {pathname === to ? (
                <IconActive className={sl.item_icon} sx={Icon === Avatar ? styleAvatar : {}}/>
            ) : (
                <Icon className={sl.item_icon} sx={Icon === Avatar ? styleAvatar : {}}/>
            )}
            {text}
        </NavLink>
    )
}


const SideBar = () => {
    return (
        <div className={sl.sb}>
            <Link to='' component='h1' className={sl.logo}>
                <img src={logo} alt=""/>
            </Link>
            <SideLink
                to='/'
                text='Главная'
                Icon={IoHomeOutline}
                IconActive={IoHome}
            />
            <SideLink
                to='/search'
                text='Поиск'
                Icon={CiSearch}
                IconActive={FaSearch}
            />
            <SideLink
                to='/explore'
                text='Интересное'
                Icon={MdOutlineExplore}
                IconActive={MdExplore}
            />
            <SideLink
                to='/message'
                text='Сообщения'
                Icon={AiOutlineMessage}
                IconActive={AiFillMessage}
            />
            <SideLink
                to='/notifications'
                text='Уведомления'
                Icon={IoMdNotificationsOutline}
                IconActive={IoNotifications}
            />
            <SideLink
                to='/myusername'
                text='Профиль'
                Icon={Avatar}
                IconActive={Avatar}
            />
            <button className={sl.item} style={{position: 'absolute', bottom: '24px'}}>
                <IoMenuOutline />
                Еще
            </button>
        </div>
    );
};

export default SideBar;