import React from "react";

const MovieCard = (props) => {

    const { movie } = props;
    console.log(movie);

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
            <p>{movie.overview}</p>
        </div>
    );
}

export default MovieCard;