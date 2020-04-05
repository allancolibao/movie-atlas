import React from 'react';
import NavBrand from './NavBrand';
import NavList from './NavList';

function NavBar(){
    return (
      <React.Fragment>        
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
          <div className="container mx-auto lg:flex">
              <NavBrand />
              <NavList />
          </div>
        </nav>
      </React.Fragment>
    );     
  };

export default NavBar;
