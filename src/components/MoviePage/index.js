import React from 'react';
import Movie from './Movie';
import CastAndCrew from './CastAndCrew';
import SimilarMovies from './SimilarMovies';

function MovieDetails({movieDetails, castAndCrew, similarMovies , videos, genre}){

    return (
        <React.Fragment>
            <Movie movieDetails={movieDetails} genre={genre} videos={videos}/>
            <CastAndCrew castAndCrew={castAndCrew}/>
            <SimilarMovies similarMovies={similarMovies} genre={genre}/>
        </React.Fragment>
    );    
}

export default MovieDetails;