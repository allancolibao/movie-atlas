import React, { Component } from 'react';
import FullCastCrewPage from '../components/FullCastCrewPage';
import Loader from '../components/Loading';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import 'react-circular-progressbar/dist/styles.css';

class FullCastCrew extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
        movieDetails: {},
        castAndCrew:{},
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
        axios.get(url + movieId + '/credits', config)
      ])
      .then(axios.spread((movieRes, castAndCrewRes) => { 
          this.setState({ 
            movieDetails : movieRes.data, 
            castAndCrew : castAndCrewRes.data, 
            isLoading: true
          });
      })).catch(error =>{
          console.log(error);
      });
    };
  
  render() { 

    const { movieDetails, castAndCrew, isLoading } = this.state;
      return ( 
        <React.Fragment>    
          {isLoading ?  
          <div>
            <FullCastCrewPage 
              movieDetails={movieDetails} 
              castAndCrew={castAndCrew} 
            /> 
          </div> 
          : <Loader /> }
      </React.Fragment>
     );
  }
}

 
export default FullCastCrew;