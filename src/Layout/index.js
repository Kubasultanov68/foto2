import React from 'react';
import SideBar from "./SideBar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <SideBar/>

            <div className='container lt'>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;