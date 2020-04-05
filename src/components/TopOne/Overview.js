import React from 'react';
import Moment from 'react-moment';

function Overview(props){

    const { title, vote_average,  release_date, overview } = props.overview;

    return (
        <div className="w-auto z-20 md:w-1/2 text-white relative md:flex flex-col lg:mt-16 lg:mb-8 pr-4">
            <h1 className="text-4xl md:text-5xl mt-4 font-weight-bolder mb-0 whitespace-normal">{title}</h1>
            <h2 className="sm:text-2xl text-base mb-2">
                {vote_average * 10 +'%'}{" | "} 
                <Moment format="MM/DD/YYYY" date={release_date} />
            </h2>
            <p className="text-xs sm:text-base">{overview}</p>
            <a href="#watch-movie" className="xl:mt-4 mt-8 mb-8 flex xl:flex">
                <button className=" px-4 lg:px-8 rounded bg-red-600 w-full absolute md:relative text-white font-bold p-2 lg:p-4 uppercase border-red-600 border-t border-b border-r">Watch Now</button>
            </a>
        </div>
    );     
  };

export default Overview;