import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import CinemaCard from '../components/Movies_Cinema';

const Films_cinema = () => {
    const [data, setData] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);

    useEffect(() => {
        if (playOnce) {
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5636896476671aba8ef68c6d957147d1')
            .then((res) => {
                setData(res.data.results);
                setPlayOnce(false);
                console.log(res.data.results);
            });
        }

    },[data, playOnce]);

    return (
        <div>
            <h1 className="titre-page">Actuellement au cinéma :</h1>
            <div className="container">
                {data.map((MovieCinema) => (
                    <CinemaCard MovieCinema={MovieCinema} key={MovieCinema.title} />
                ))}
            </div>
        </div>
    );
};

export default Films_cinema;