import React from 'react';

function Poster({poster}){
    return (
        <div className="w-auto z-0 md:z-20 md:w-1/2 xl:pt-8  items-center absolute md:relative flex justify-end">
            <div className="absolute inset-0 z-10 bg-black md:hidden opacity-50  flex flex-col"></div>
            <img className="md:w-3/5 object-cover hidden md:block " src={poster ? 'https://image.tmdb.org/t/p/w500' + poster : process.env.PUBLIC_URL + '/img/movie-alt-2.jpg'} alt="Movie cover"/>
        </div>
    );     
  };

export default Poster;