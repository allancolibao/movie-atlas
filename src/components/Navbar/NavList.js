import React from 'react';
import Menu from './Menu';
import SearchBtn from './SearchBtn';
import Avatar from './Avatar';

function NavList(){
    return (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-8">
            <Menu />
            <SearchBtn />
            <Avatar />
        </div>
    );     
  };

export default NavList;