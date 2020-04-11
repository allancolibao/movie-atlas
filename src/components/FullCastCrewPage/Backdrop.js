import React from 'react';


function Backdrop(props){
    return (
        <div className="w-auto">
            <div className="z-10 w-full w-full h-screen absolute linear-gradient-overlay"></div>
            <img className="w-full h-screen absolute z-0 block  object-cover opacity-50" 
                src={props.movieDetails.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + props.movieDetails.backdrop_path : process.env.PUBLIC_URL + '/img/cover-alt.jpg'} 
                alt="Movie backdrop"/>
        </div>
    );     
  };

export default Backdrop;