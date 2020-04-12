import React from 'react';
import Poster from './Poster';
import Overview from './Overview';

function Content({content, genre}){
  
    const { poster_path } = content;

    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center xl:pb-16 xl:px-0 px-4 pt-4 md:pt-16">
            <Overview content={content} genre={genre}/>
            <Poster poster={poster_path}/>
        </div>
    );     
  };

export default Content;