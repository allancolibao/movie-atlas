import React, { Component } from 'react';
import NavBar from './components/Navbar';
import TopMovie from './components/TopOne';
import PopularMovies from './components/PopularMovies';
import NowPlaying from './components/NowPlaying';
import TopRated from './components/TopRated';
import UpcomingMovies from './components/UpcomingMovies';
import Footer from './components/Footer';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
        popularMovies: {},
        nowPlaying: {},
        topRated: {},
        upcomingMovies: {},
        isLoading: false
    }
  }
    componentDidMount(){

      const url = 'https://api.themoviedb.org/3/movie/';

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
        axios.get(url + '/upcoming', config)
      ])
      .then(axios.spread((popularRes, nowPlayingRes, topRatedRes, upcomingMoviesRes ) => { 
          this.setState({ 
            popularMovies : popularRes.data.results, 
            nowPlaying : nowPlayingRes.data.results,  
            topRated : topRatedRes.data.results,  
            upcomingMovies : upcomingMoviesRes.data.results,
            isLoading: true
          });
      })).catch(error =>{
          console.log(error);
      });
    };
  
  render() { 

    const {popularMovies, nowPlaying, topRated, upcomingMovies, isLoading } = this.state;
      return ( 
        <React.Fragment>     
        {isLoading ?  
          <div>
            <NavBar  /> 
            <TopMovie movies={popularMovies[0]}/> 
            <PopularMovies movies={popularMovies}/> 
            <NowPlaying movies={nowPlaying}/>
            <TopRated movies={topRated}/>
            <UpcomingMovies movies={upcomingMovies} />
            <Footer/>
          </div> 
          : <h1>Loading...</h1>}
      </React.Fragment>
     );
  }
}

 
export default App;

