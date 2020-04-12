import React from 'react';

function NavBrand(){
    return (
        <div className="absolute top-0 mt-4 lg:mt-0 lg:relative lg:flex items-center flex-shrink-0 text-white mr-2 ">
            <span className="font-semibold text-xl tracking-tight">
            <a href="/">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} 
                alt="NavBrand" 
                className="object-cover w-40 lg:w-48 object-center visible" />
            </a>
            </span>
        </div>
    );     
  };

export default NavBrand;