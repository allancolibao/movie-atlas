import React, { Component } from 'react';
import NavBrand from './NavBrand';
import NavList from './NavList';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // Bind object
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 850) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 850) {
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>        
        <nav className={!this.state.scrollingLock ? "flex items-center justify-between flex-wrap bg-black p-6 z-40" : "flex items-center justify-between flex-wrap bg-black block p-6 sticky top-0 z-40"} >
          <div className="container mx-auto lg:flex">
              <NavBrand />
              <NavList />
          </div>
        </nav>
      </React.Fragment>
    );     
  }
}

export default NavBar;
