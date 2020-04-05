import React from 'react';


function NowPlaying(props){
  
    const movies = props.movies;

    return (
    <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover p-2 md:p-0">
         <div className="container mt-4  mx-auto z-20">
            <h1 className="text-4xl md:text-5xl  font-weight-bolder mb-0 text-red-600 whitespace-normal">Now Playing</h1>
            <div className="flex flex-wrap">
                {movies.slice(0, 12).map((movie, i) => 
                    <div className="w-auto p-0 w-1/4 lg:w-1/6 cursor-pointer" key={i} >
                        <div className="overflow-hidden  shadow-lg">
                            <img className="w-full" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie Cover"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    );     
  };

export default NowPlaying;