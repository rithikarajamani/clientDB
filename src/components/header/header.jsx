import React from 'react';
import Sidebar from '../navbar/sideBar';
import NavBar from '../navbar/navbar';
import Table from '../table/table';
function Header() {
    return ( 
        <>
        <Sidebar/>
        <NavBar/>
        <Table/>
        </>
     );
}

export default Header;