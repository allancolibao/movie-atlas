import React from 'react';

function Menu(){
    return (
        <div className="absolute top-0 pt-4 lg:pt-0 text-md lg:relative lg:block lg:flex-grow">
            <a href="#home" 
                className="block mt-2 inline-block lg:mt-0 text-white hover:text-white mr-4">
                Home
            </a>
            <a href="#movies" 
                className="block mt-2 inline-block lg:mt-0 text-white hover:text-white mr-4">
                Movies
            </a>
            <a href="#my-list" 
                className="block mt-2 inline-block lg:mt-0 text-white hover:text-white">
                My List
            </a>
        </div>
    );     
  };

export default Menu;