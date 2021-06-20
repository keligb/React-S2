import React from "react";

const MovieCard = (props) => {

    const { movie } = props;

    return (
        <div className="MovieCard">
            <h1 className="movie-title">{movie.title}</h1>
            <img className="img-MovieCard" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
        </div>
    );
};

export default MovieCard;