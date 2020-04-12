import React from 'react';

function CastAndCrew({castAndCrew}){

    const style = {backgroundColor: "#000000c4"};

    return (
        <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover p-2 md:p-0">
             <div className="container mt-12 md:mt-2 mx-auto z-20">
                <h1 className="text-2xl md:text-4xl font-weight-bolder mb-1 text-orange-600 whitespace-normal">Top Cast</h1>
                <div className="flex flex-wrap">
                    {castAndCrew.cast.slice(0, 12).map((cast, i) => 
                        <div className="w-auto p-1 w-1/4 lg:w-1/6 cursor-pointer relative" key={i} >
                            <a href={'/person/' + cast.id}>
                            <div className="overflow-hidden  shadow-lg">
                                <img className="w-full" src={cast.profile_path ? 'https://image.tmdb.org/t/p/w500' + cast.profile_path : process.env.PUBLIC_URL + '/img/alt-2.jpg'} alt="Movie Cover"/>
                            </div>
                                <div className="overlay hidden md:block absolute top-0 bottom-0 right-0 left-0 w-full h-full opacity-0  transition duration-500 ease-in-out hover:opacity-100" style={style}>
                                    <div className="text-white p-5 opacity-100">
                                        <h1 className="text-lg">{cast.name}</h1>
                                        <h2 className="text-sm">
                                            {cast.character}
                                        </h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
                <a  href={"/movie/full-cast-crew/" + castAndCrew.id}className="text-base md:text-lg font-weight-bolder text-gray-200 hover:text-gray-500 whitespace-normal">See Full Cast and Crew >></a>
            </div>
        </div>
    );   
}

export default CastAndCrew;