import React from 'react';
import Movie from './Movie';
import CastAndCrew from './CastAndCrew';
import SimilarMovies from './SimilarMovies';

function MovieDetails(props){


    return (
        <React.Fragment>
            <Movie movieDetails={props.movieDetails} genre={props.genre} videos={props.videos}/>
            <CastAndCrew castAndCrew={props.castAndCrew}/>
            <SimilarMovies similarMovies={props.similarMovies} genre={props.genre}/>
        </React.Fragment>
    );    
}

export default MovieDetails;