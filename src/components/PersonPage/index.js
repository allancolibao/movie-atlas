import React from 'react';
import Moment from 'react-moment';


function PersonPage(props){

    const movies  = props.movieCredits.cast;
    const casts = props.movieCredits.cast;
    const crews = props.movieCredits.crew;
    const { profile_path, name, biography, known_for_department, birthday, place_of_birth, also_known_as, homepage} = props.personDetails;
    const genresList = props.genre.genres;
    const style = {backgroundColor: "#000000c4"};
    
    return(
        <div className="flex w-full min-h-full bg-black bg-no-repeat bg-center bg-cover">
            <div className="container mx-auto pt-2 pb-2 md:pt-8 md:pb-8">
                <div className="w-full flex  z-20 text-gray-300">
                    <div className="w-1/2 md:w-1/4 pl-2 md:pl-0 pr-2 md:pr-6">
                        <div className="shadow-lg">
                            <img className="object-cover w-auto rounded" src={profile_path ? 'https://image.tmdb.org/t/p/w500' + profile_path : process.env.PUBLIC_URL + '/img/movie-alt.jpg'} alt="Movie cover"/>
                        </div>
                        <div className="pt-2 pl-2 md:pt-4">
                            <a  href={homepage} className="text-base md:text-xl"><i className="fa fa-link"></i></a>  
                        </div>
                        <div className="mt-2 mb-2">
                            <h2 className="text-lg md:text-2xl mt-2 mb-2">Personal Info</h2>
                            <div className="mt-4 mb-3">
                                <h3 className="text-base md:text-xl">Birthday</h3>
                                <p className="text-xs sm:text-sm">{birthday}</p>
                            </div>
                            <div className="mt-4 mb-3">
                                <h3 className="text-base md:text-xl">Place of birth</h3>
                                <p className="text-xs sm:text-sm">{place_of_birth}</p>
                            </div>
                            <div className="mt-4 mb-3">
                                <h3 className="text-base md:text-lg">Know for</h3>
                                <p className="text-xs sm:text-sm">{known_for_department}</p>
                            </div>
                            <div className="mt-4 mb-3">
                                <h3 className="text-base md:text-xl">Also known as</h3>
                                {also_known_as.map((info, i) => <p key={i} className="text-xs sm:text-sm">{info}</p>)}
                            </div>
                        </div> 
                    </div>
                    <div className="w-3/4 pr-2 md:pr-0 pl-2 md:pl-6">
                        <h1 className="text-3xl md:text-5xl font-weight-bolder text-orange-600 mb-2 whitespace-normal">{name}</h1>
                        <div className="mt-2 mb-2">
                            <h2 className="text-lg md:text-2xl mb-1">Biography</h2>
                            <p className="text-xs md:text-sm">{biography}</p>  
                        </div>

                        <h2 className="text-lg md:text-2xl mt-4 mb-1">Movies</h2>
                        <div className="flex flex-wrap">
                            {movies.filter(movie => movie.poster_path != null).slice(0, 12).map((movie, i) => 
                                <div className="w-auto p-0 w-1/4 lg:w-1/6 cursor-pointer relative" key={i} >
                                    <a href={'/movie/' + movie.id}>
                                    <div className="overflow-hidden  shadow-lg">
                                        <img className="w-full" src={movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : process.env.PUBLIC_URL + '/img/movie-alt.jpg'} alt="Movie Cover"/>
                                    </div>
                                    
                                        <div className="overlay hidden md:block absolute top-0 bottom-0 right-0 left-0 w-full h-full opacity-0  transition duration-500 ease-in-out hover:opacity-100" style={style}>
                                            <div className="text-white p-2 opacity-100">
                                            
                                                <h1 className="text-lg">{movie.title}</h1>
                                                <h2 className="text-sm">
                                                    {movie.vote_average * 10 +'%'}{" | "} 
                                                    <Moment format="MM/DD/YYYY" date={movie.release_date} />{" | "} 
                                                    {movie.genre_ids.map((movieGenre, key) => { return genresList.filter(genreList => genreList.id === movieGenre ).map(genreList => { return (key ? ', ' : '') + genreList.name })})}
                                                </h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>


                        <div className="flex mt-4">
                            <div className="w-1/2">
                            <h2 className="text-lg md:text-2xl mt-2 mb-1">All Movies</h2>
                                    {casts.length !== 0 ? casts.map((cast, i) => 
                                        <div key={i}>
                                            <a href={'/movie/' + cast.id}>
                                                <h2 className="text-xs md:text-base mb-2 hover:text-gray-500">{cast.original_title}{' | '}{cast.character}</h2>
                                            </a>  
                                        </div>
                                    ) :  <h2 className="text-xs md:text-base mb-2 hover:text-gray-500">No result</h2>}
                            </div>
                            <div className="w-1/2 ml-2">
                            <h2 className="text-lg md:text-2xl mt-2 mb-1">Production</h2>
                                    {crews.length !== 0 ? crews.map((crew, i) => 
                                        <div key={i}>
                                            <a href={'/movie/' + crew.id}>
                                            <h2 className="text-xs md:text-base mb-2 hover:text-gray-500">{crew.original_title}{' | '}{crew.job}</h2>
                                            </a>
                                        </div>
                                    ) : <h2 className="text-xs md:text-base mb-2 hover:text-gray-500">No result</h2>}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonPage;