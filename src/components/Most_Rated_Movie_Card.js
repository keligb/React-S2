import React from 'react';

const Most_Rated_Movie_Card = (props) => {

    const { MostRated } = props;

    return (
        <div className="MovieCard">
            <h1 className="movie-title">{MostRated.title}</h1>
            <img className="img-MovieCard" src={"https://image.tmdb.org/t/p/w500/" + MostRated.poster_path} />
        </div>
    );
};

export default Most_Rated_Movie_Card;