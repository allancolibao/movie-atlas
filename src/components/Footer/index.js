import React from 'react';

function Footer(){
    return (
    <React.Fragment>
        <div className="flex min-h-full bg-black bg-no-repeat bg-center bg-cover p-2 md:p-0 text-gray-600">
            <div className="container mt-4 mb-8 md:mb-20 mx-auto border-t-2 border-gray-900 pt-2 md:pt-6">
                <div className="sm:flex mb-4">
                    <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <h1 className="text-gray-400 mb-2">Visit me</h1>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://arcdev.me/"><i className="fa fa-globe"></i> Portfolio</a>
                            </li>
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://www.instagram.com/allancolibao/"><i className="fa fa-instagram"></i> Instagram</a>
                            </li>
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://twitter.com/allancolibao"><i className="fa fa-twitter"></i> Twitter</a>
                            </li>
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://github.com/allancolibao"><i className="fa fa-github"></i> Github</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <h1 className="text-gray-400 mb-2">Tools &#38; References</h1>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://reactjs.org/">Reactjs</a>
                            </li>
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://tailwindcomponents.com/">Tailwind CSS</a>
                            </li>
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://tailwindcss.com/">Tailwind Components</a>
                            </li>
                            <li className="hover:text-blue text-grey-darker">
                                <a href="https://fontawesome.com/">Font Awesome</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <h1 className="text-gray-400 mb-2">Data Resource</h1>
                        <ul className="list-reset leading-normal">
                        <li className="hover:text-blue text-grey-darker">
                                <a href="https://www.themoviedb.org/">The Movie Database</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                        <h1 className="text-gray-500 mb-2">Special thanks to!</h1>
                        <p className="text-grey-darker leading-normal"></p>
                        <a href="https://www.themoviedb.org/">
                            <div className="mt-4 flex">
                                <img className="w-auto" src={process.env.PUBLIC_URL + '/img/tmdb.svg'} alt="Movie Cover"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black">
            <div className="border-t-2 border-gray-900 flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-6">
                    <p className="text-sm text-red-600 font-bold mb-2">
                       Made with &#x2764; by Allan Colibao | 2020
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>
    ); 
}

export default Footer;