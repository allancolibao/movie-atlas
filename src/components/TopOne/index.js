import React from 'react';
import Backdrop from './Backdrop';
import Content from './Content';
import FadeIn from 'react-fade-in';

function TopMovie({movies,  genre}){
  
    const { backdrop_path } = movies;
    
    return (
      <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover lg:h-screen">
            <section className="w-full">
                <Backdrop backdrop={backdrop_path}/>
                <FadeIn delay="70" transitionDuration="700">
                  <Content content={movies} genre={genre} />
                </FadeIn>
            </section>
      </div>
    );     
  };

export default TopMovie;