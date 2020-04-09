import React from 'react';
import Iframe from 'react-iframe'
import Backdrop from './Backdrop';

function TrailerPage(props){

    const videos = props.videos;
    const { title } = props.movieDetails 

    console.log(videos)

    return (
        <div className="flex h-full pb-0 md:pb-6 lg:pb-8 bg-black bg-no-repeat bg-center bg-cover ">
        <Backdrop movieDetails={props.movieDetails}/>
         <div className="container mt-2 md:mt-2 mx-auto z-20">
            <h1 className="p-2 md:p-0 text-3xl md:text-4xl font-weight-bolder mb-1 text-white whitespace-normal">{title}</h1>
            <div className="flex flex-wrap">
                {videos.map((trailer, i) => 
                    <div className="w-full p-2 w-1/1 lg:w-1/2 cursor-pointer" key={i} >
                        <div className="overflow-hidden">
                            <h1 className="text-red-600 text-xl whitespace-normal">{trailer.name}</h1>
                            <h1 className="text-white text-lg whitespace-no-wrap">{trailer.type}</h1>
                            <Iframe 
                                url={"https://www.youtube.com/embed/" + trailer.key} 
                                position="relative" 
                                width="100%"
                                height="350px"
                                display="initial"
                                allow="fullscreen"
                                >
                            </Iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    </div>

    );
}

export default TrailerPage;