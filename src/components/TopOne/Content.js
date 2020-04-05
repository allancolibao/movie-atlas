import React from 'react';
import Poster from './Poster';
import Overview from './Overview';

function Content(props){
  
    const { poster_path } = props.content;

    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center xl:pb-16 xl:px-0 px-4 pt-4 md:pt-16">
            <Overview overview={props.content} />
            <Poster poster={poster_path}/>
        </div>
    );     
  };

export default Content;