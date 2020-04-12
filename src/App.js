import React from 'react';
import {  BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Trailer from './pages/Trailer';
import FullCastCrew from './pages/FullCastCrew';
import Person from './pages/Person';
import Footer from './components/Footer';
import Search from './pages/Search';

function App(){
    return(
        <React.Fragment>
            <Router>
                <NavBar/> 
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movie/:id" component={Movie} />
                    <Route exact path="/movie/trailer/:id" component={Trailer} />
                    <Route exact path="/movie/full-cast-crew/:id" component={FullCastCrew} />
                    <Route exact path="/person/:id" component={Person} />
                    <Route exact path="/search" component={Search} />
                <Footer/>
            </Router> 
        </React.Fragment>
    );
}

export default App;