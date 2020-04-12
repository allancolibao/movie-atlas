import React, { Component } from 'react';
import MovieDetails from '../components/MoviePage';
import Loader from '../components/Loading';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import 'react-circular-progressbar/dist/styles.css';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
        movieDetails: {},
        similarMovies:{},
        castAndCrew:{},
        genre: {},
        isLoading: false
    }
  }
    componentDidMount(){

      
      const movieId = this.props.match.params.id;
      const url = 'https://api.themoviedb.org/3/movie/';
      const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';

      const token = process.env.REACT_APP_ACCESS_TOKEN;
      const config =  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      }
      }
      axios.all([
        axios.get(url + movieId, config),
        axios.get(url + movieId + '/recommendations', config),
        axios.get(url + movieId + '/credits', config),
        axios.get(genreUrl, config)
      ])
      .then(axios.spread((movieRes, similarRes, castAndCrewRes, genreList ) => { 
          this.setState({ 
            movieDetails : movieRes.data, 
            similarMovies : similarRes.data.results, 
            castAndCrew : castAndCrewRes.data, 
            genre : genreList.data.genres,
            isLoading: true
          });
      })).catch(error =>{
          console.log(error);
      });
    };
  
  render() { 

    const { movieDetails, similarMovies, castAndCrew, genre, isLoading } = this.state;
      return ( 
        <React.Fragment>    
          {isLoading ?  
          <div>
            <MovieDetails 
              movieDetails={movieDetails} 
              castAndCrew={castAndCrew} 
              similarMovies={similarMovies} 
              genre={genre}/> 
          </div> 
          : <Loader /> }
      </React.Fragment>
     );
  }
}

 
export default MoviePage;

