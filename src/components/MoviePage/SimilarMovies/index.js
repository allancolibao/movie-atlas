import React from 'react';
import Moment from 'react-moment';

function SimilarMovies({similarMovies, genre}){
  
    const style = {backgroundColor: "#000000c4"};

    return (
    <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover p-2 md:p-0">
         <div className="container mb-4 mt-1 md:mt-6 mx-auto z-20">
            <h1 className="text-2xl md:text-4xl font-weight-bolder mb-1 text-orange-600 whitespace-normal">More like this</h1>
            <div className="flex flex-wrap">
                {similarMovies.length !== 0 ? similarMovies.slice(0, 12).map((movie, i) => 
                    <div className="w-auto p-0 w-1/4 lg:w-1/6 cursor-pointer relative" key={i} >
                        <a href={'/movie/' + movie.id}>
                        <div className="overflow-hidden  shadow-lg">
                            <img className="w-full" src={movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : process.env.PUBLIC_URL + '/img/movie-alt-2.jpg'} alt="Movie Cover"/>
                        </div>
                        
                            <div className="overlay hidden md:block absolute top-0 bottom-0 right-0 left-0 w-full h-full opacity-0  transition duration-500 ease-in-out hover:opacity-100" style={style}>
                                <div className="text-white p-5 opacity-100">
                                
                                    <h1 className="text-lg">{movie.title}</h1>
                                    <h2 className="text-sm">
                                        {movie.vote_average * 10 +'%'}{" | "} 
                                        <Moment format="MM/DD/YYYY" date={movie.release_date} />{" | "} 
                                        {movie.genre_ids.map((movieGenre, key) => { return genre.filter(genreList => genreList.id === movieGenre ).map(genreList => { return (key ? ', ' : '') + genreList.name })})}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>
                ) :  <h1 className="text-lg md:text-xl mb-1 text-white whitespace-normal">No found result</h1>}
            </div>
        </div>
    </div>
    );     
  };

export default SimilarMovies;