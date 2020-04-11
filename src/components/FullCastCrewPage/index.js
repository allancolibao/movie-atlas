import React from 'react';
import Backdrop from './Backdrop';

function FullCastCrewPage(props){

    const { title, id } = props.movieDetails;
    const casts = props.castAndCrew.cast;
    const crews = props.castAndCrew.crew;

    return (
        <div className="flex h-full pb-0 md:pb-6 lg:pb-8 bg-black bg-no-repeat bg-center bg-cover ">
        <Backdrop movieDetails={props.movieDetails}/>
         <div className="container mt-2  mx-auto z-20">
            <a href={'/movie/' + id}>
                <h1 className="pl-4 md:p-0 text-3xl md:text-4xl font-weight-bolder mb-1 text-white whitespace-normal">{title}</h1>
            </a>
            <div className="flex text-white pl-4 md:p-2">
                <div className="w-1/2">
                    <h1 className="md:p-0 text-2xl md:text-3xl font-weight-bolder mb-1 text-orange-600 whitespace-normal">Cast</h1>
                        {casts.map((cast, i) => 
                            <div key={i}>
                               <img className="w-12 md:w-16 rounded" src={cast.profile_path ? 'https://image.tmdb.org/t/p/w500' + cast.profile_path : process.env.PUBLIC_URL + '/img/alt.jpg'} alt="No Profile pic"/>
                                 <a href={'/person/' + cast.id}>
                                    <h2 className="text-sm md:text-base px-6 py-2 hover:text-gray-500">{cast.name}{' | '}{cast.character}</h2>
                                </a>  
                            </div>
                        )}
                </div>
                <div className="w-1/2">
                    <h1 className="md:p-0 text-2xl md:text-3xl font-weight-bolder mb-1 text-orange-600 whitespace-normal">Crew</h1>
                        {crews.map((crew, i) => 
                            <div key={i}>
                                <img className="w-12 md:w-16 rounded" src={crew.profile_path ? 'https://image.tmdb.org/t/p/w500' + crew.profile_path : process.env.PUBLIC_URL + '/img/alt.jpg'} alt="No Profile pic"/>
                                <a href={'/person/' + crew.id}>
                                <h2 className="text-sm md:text-base px-6 py-2 hover:text-gray-500">{crew.name}{' | '}{crew.job}</h2>
                                </a>
                            </div>
                        )}
                </div>
            </div>
        </div>        
    </div>
    );
}

export default FullCastCrewPage;