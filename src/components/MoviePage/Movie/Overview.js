import React from 'react';
import Moment from 'react-moment';
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressProvider from "./ProgressProvider";

function Overview({content, genre}){

    const { title, vote_average,  release_date, overview, genres, id } = content;
    const rating = vote_average * 10;
    const styles = {
          path: {
            stroke: `#dd6b20`,
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: '#ffffff',
            strokeLinecap: 'round',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fill: '#ffffff',
            fontSize: '1.7rem',
          },
    }
    return (
        <div className="w-auto z-20 md:w-1/2 text-white relative md:flex flex-col lg:mt-16 lg:mb-8 pr-4">
            <h1 className="text-4xl md:text-5xl mt-4 font-weight-bolder mb-0 whitespace-normal">{title}</h1>
            <div className="flex mb-2">
              <div className="w-4/4 pr-2">
                <div className="w-10 md:w-16">
                  <ProgressProvider valueStart={0} valueEnd={rating}>
                    {rating => <CircularProgressbar value={rating} text={`${rating}%`} styles={styles}/>}
                  </ProgressProvider>
                </div>
              </div>
              <div className="w-3/4 pt-2">
                <h2 className="sm:text-2xl text-base">
                    <Moment format="MM/DD/YYYY" date={release_date} />
                    <span className="rounded-full bg-gray-500 h-2 w-2 mx-1 inline-block"></span>
                    {genres.map((movieGenre, key) => { return genre.filter(genreList => genreList.id === movieGenre.id ).map(genreList => { return (key ? ', ' : '') + genreList.name })})}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-base">{overview}</p>
            <a href={"trailer/" + id } className="xl:mt-4 mt-8 mb-8 flex xl:flex">
                <button className=" px-4 lg:px-8 rounded bg-orange-600 w-full absolute md:relative text-white font-bold p-2 lg:p-4 uppercase border-orange-600 border-t border-b border-r"><i className="fa fa-play"></i> Watch Trailer</button>
            </a>
        </div>
    );     
  };

export default Overview;