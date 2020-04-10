import React from 'react';


function Backdrop(props){
    return (
        <div className="w-auto">
            <img className="w-full h-screen absolute z-0 block  object-cover opacity-25 " src={'https://image.tmdb.org/t/p/w500' + props.movieDetails.backdrop_path} alt="Movie backdrop"/>
        </div>
    );     
  };

export default Backdrop;