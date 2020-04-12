import React from 'react';

function Menu(){
    return (
        <div className="absolute top-0 pt-4 lg:pt-3 text-md hidden lg:block lg:relative lg:block lg:flex-grow">
            <a href="/" 
                className="block mt-2 inline-block lg:mt-0 text-white hover:text-white mr-4">
                Home
            </a>
            <a href="/" 
                className="block mt-2 inline-block lg:mt-0 text-white hover:text-white mr-4">
                Movies
            </a>
            <a href="/" 
                className="block mt-2 inline-block lg:mt-0 text-white hover:text-white">
                My List
            </a>
        </div>
    );     
  };

export default Menu;