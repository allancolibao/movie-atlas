import React from 'react';
import Menu from './Menu';
import Search from './Search';
import Avatar from './Avatar';

function NavList(){
    return (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-8">
            <Menu />
            <Search />
            <Avatar />
        </div>
    );     
  };

export default NavList;