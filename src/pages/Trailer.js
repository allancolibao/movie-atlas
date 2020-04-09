import React, { Component } from 'react';
import TrailerPage from '../components/TrailerPage';
import Loader from '../components/Loading';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import 'react-circular-progressbar/dist/styles.css';

class Trailer extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
        movieDetails:{},
        videos:{},
        isLoading: false
    }
  }
    componentDidMount(){

      const movieId = this.props.match.params.id;
      const url = 'https://api.themoviedb.org/3/movie/';

      const token = process.env.REACT_APP_ACCESS_TOKEN;
      const config =  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      }
      }
      axios.all([
        axios.get(url + movieId, config),
        axios.get(url + movieId + '/videos', config),
      ])
      .then(axios.spread((movieRes, videoRes) => { 
          this.setState({ 
            movieDetails : movieRes.data, 
            videos: videoRes.data.results,
            isLoading: true
          });
      })).catch(error =>{
          console.log(error);
      });
    };
  
  render() { 

    const { movieDetails, videos, isLoading } = this.state;
      return ( 
        <React.Fragment>    
          {isLoading ?  
            <TrailerPage movieDetails={movieDetails}  videos={videos}/>
          : <Loader /> }
      </React.Fragment>
     );
  }
}

 
export default Trailer;

