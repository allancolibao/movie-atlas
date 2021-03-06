import React from 'react';

function Backdrop({movieDetails}){
    return (
        <div className="w-auto">
            <img className="w-full h-screen absolute block  object-cover opacity-50" 
                src={movieDetails.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + movieDetails.backdrop_path : process.env.PUBLIC_URL + '/img/cover-alt.jpg'} 
                alt="Movie backdrop"/>
            <div className="w-full w-full h-screen absolute linear-gradient-overlay"></div>
        </div>
    );     
  };

export default Backdrop;