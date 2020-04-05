import React from 'react';
import Backdrop from './Backdrop';
import Content from './Content';

function TopMovie(props){
  
    const { backdrop_path } = props.movies;

    return (
      <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover lg:h-screen">
            <section className="w-full">
                <Backdrop backdrop={backdrop_path}/>
                <Content content={props.movies} />
            </section>
      </div>
    );     
  };

export default TopMovie;