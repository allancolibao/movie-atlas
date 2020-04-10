import React, { Component } from 'react';
import PersonPage from '../components/PersonPage';
import Loader from '../components/Loading';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import 'react-circular-progressbar/dist/styles.css';

class Person extends Component {
    constructor(props) {
      super(props);
      this.state ={ 
          personDetails: {},
          movieCredits: {},
          genre: {},
          isLoading: false
      }
    }
      componentDidMount(){
  
        
        const personId = this.props.match.params.id;
        const url = 'https://api.themoviedb.org/3/person/';
        const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';
  
        const token = process.env.REACT_APP_ACCESS_TOKEN;
        const config =  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        }
        }
        axios.all([
          axios.get(url + personId, config),
          axios.get(url + personId + '/movie_credits', config),
          axios.get(genreUrl, config)
        ])
        .then(axios.spread((personRes, movieCreditsRes, genreList) => { 
            this.setState({ 
              personDetails : personRes.data, 
              movieCredits : movieCreditsRes.data, 
              genre : genreList.data,
              isLoading: true
            });
        })).catch(error =>{
            console.log(error);
        });
      };
    
    render() { 
  
      const { personDetails, movieCredits , genre, isLoading } = this.state;
        return ( 
          <React.Fragment>    
            {isLoading ?  
            <div>
              <PersonPage 
                personDetails={personDetails} 
                movieCredits={movieCredits}
                genre={genre}
              /> 
            </div> 
            : <Loader /> }
        </React.Fragment>
       );
    }
}

export default Person;