import React from 'react';


function Backdrop(props){
    return (
        <div className="w-auto">
            <img className="w-full h-screen absolute z-0 block  object-cover opacity-25 " 
                 src={props.backdrop ? 'https://image.tmdb.org/t/p/w500' + props.backdrop : process.env.PUBLIC_URL + '/img/cover-alt.jpg'} 
                 alt="Movie backdrop"/>
        </div>
    );     
  };

export default Backdrop;