import React from 'react';

const Movies_Cinema = (props) => {

    const { MovieCinema } = props;

    return (
        <div className="MovieCard">
            <h1 className="movie-title">{MovieCinema.title}</h1>
            <img className="img-MovieCard" src={"https://image.tmdb.org/t/p/w500/" + MovieCinema.poster_path}/> 
        </div>
    );
};

export default Movies_Cinema;