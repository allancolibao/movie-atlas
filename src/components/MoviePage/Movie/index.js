import React from 'react';
import Backdrop from './Backdrop';
import Content from './Content';
import FadeIn from 'react-fade-in';

function Movie({movieDetails, genre}){
  
    const { backdrop_path } = movieDetails;

    return (
      <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover lg:h-screen">
            <section className="w-full">
                <Backdrop backdrop={backdrop_path}/>
                <FadeIn delay="70" transitionDuration="700">
                  <Content content={movieDetails} genre={genre} />
                </FadeIn>
            </section>
      </div>
    );     
  };

export default Movie;