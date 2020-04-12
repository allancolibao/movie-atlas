import React,{Component} from 'react';
import { search } from '../components/Search/utils'
import Results from '../components/Search'

class Search extends Component{
    state = {
      movies: null,
      loading: false,
      value: ''
    };

    search = async val => {
      const token = process.env.REACT_APP_ACCESS_TOKEN_V3;
      this.setState({ loading: true });
      const results = await search(
        `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${token}`
      );
      const movies = results;
      this.setState({ movies, loading: false });
    };
  
    onChangeHandler = async e => {
      this.search(e.target.value);
      this.setState({ value: e.target.value });
    };
  
    get renderMovies() {
      let movies = '';
      if (this.state.movies) {
        movies = <Results movies={this.state.movies} />;
      }

      return movies;
    }

    render() {
    return (
        <React.Fragment>
            <div className="container mt-4  mx-auto z-20 p-2">
                <input 
                    className="appearance-none w-full bg-gray-900 text-gray-700 border border-gray-800 rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:text-white focus:border-gray-700" 
                    id="search-movie" 
                    type="text" 
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Search for a movie..." />   
                    
            </div>
            {this.renderMovies}
        </React.Fragment>
    )     
  }
}

export default Search;