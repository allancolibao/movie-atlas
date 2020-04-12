import React from 'react';

function SearchBtn(){
    return (
        <React.Fragment>
            <div className="pt-5 md:pt-5 lg:pt-0 lg:block">
            </div>
            <a href="/search">
              <div className="absolute top-0 right-0 pt-6 pr-20 md:pt-6 md:pr-20 lg:hidden">
                  <svg className="fill-current pointer-events-none text-white w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
              </div>
              <div className="hidden lg:block">
                  <svg className="fill-current pointer-events-none text-white w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
              </div>
            </a>
        </React.Fragment>
    );   
  }


export default SearchBtn;