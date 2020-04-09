import React, { Component } from 'react';
import TopMovie from '../components/TopOne';
import PopularMovies from '../components/PopularMovies';
import NowPlaying from '../components/NowPlaying';
import TopRated from '../components/TopRated';
import UpcomingMovies from '../components/UpcomingMovies';
import Loader from '../components/Loading';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import 'react-circular-progressbar/dist/styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
        popularMovies: {},
        nowPlaying: {},
        topRated: {},
        upcomingMovies: {},
        genre: {},
        isLoading: false
    }
  }
    componentDidMount(){

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
        axios.get(url + '/popular', config),
        axios.get(url + '/now_playing', config),
        axios.get(url + '/top_rated', config),
        axios.get(url + '/upcoming', config),
        axios.get(genreUrl, config)
      ])
      .then(axios.spread((popularRes, nowPlayingRes, topRatedRes, upcomingMoviesRes, genreList ) => { 
          this.setState({ 
            popularMovies : popularRes.data.results, 
            nowPlaying : nowPlayingRes.data.results,  
            topRated : topRatedRes.data.results,  
            upcomingMovies : upcomingMoviesRes.data.results,
            genre : genreList.data,
            isLoading: true
          });
      })).catch(error =>{
          console.log(error);
      });
    };
  
  render() { 

    const {popularMovies, nowPlaying, topRated, upcomingMovies, genre, isLoading } = this.state;
      return ( 
        <React.Fragment>    
          {isLoading ?  
          <div>
            <TopMovie movies={popularMovies[0]} genre={genre}/> 
            <PopularMovies movies={popularMovies} genre={genre}/> 
            <NowPlaying movies={nowPlaying} genre={genre}/>
            <TopRated movies={topRated} genre={genre}/>
            <UpcomingMovies movies={upcomingMovies} genre={genre}/>
          </div> 
          : <Loader /> }
      </React.Fragment>
     );
  }
}

 
export default Home;

