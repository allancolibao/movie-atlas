import React from 'react';

function Avatar(){
    return (
        <div className="absolute top-0 right-0 lg:relative mr-5 mt-5 lg:mt-0 lg:ml-6 w-8 h-8 lg:w-12 lg:h-12 inline-block">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <img src={process.env.PUBLIC_URL + '/img/dp.jpg'} 
                alt="avatar" 
                className="object-cover object-center w-full h-full visible group-hover:hidden" />
            </div>
        </div>
    );     
  };

export default Avatar;