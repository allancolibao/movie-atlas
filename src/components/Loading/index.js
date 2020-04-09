import React from 'react';
import FadeIn from 'react-fade-in';


function Loader(){
    return (
        <div className="flex w-full h-screen bg-black fixed  top-0 z-40">
            <div className="m-auto">
                <FadeIn delay="10" transitionDuration="700">
                    <span className="rounded-full bg-red-600 h-3 w-3 mx-1 inline-block"></span>
                    <span className="rounded-full bg-red-600 h-3 w-3 mx-1 inline-block"></span>
                    <span className="rounded-full bg-red-600 h-3 w-3 mx-1 inline-block"></span>
                </FadeIn>
            </div>
        </div>
    );     
  };

export default Loader;
