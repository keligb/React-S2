import React from 'react';
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react';


const Films = () => {
    const[data, setData] = useState([]);
    const[country, setCountry] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);


    useEffect( function test() { 

            if (playOnce) {
                axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5636896476671aba8ef68c6d957147d1')
                .then((res) => {
                    setData(res.data.results);
                    setPlayOnce(false);
                    console.log(res.data);
                });
                
            }

    }, [data, playOnce]);

    return(


        <div>
            <h1 className="titre-page">Les plus populaires :</h1> 
            <div className="container">
                    {data.map((movie) => (
                            <MovieCard movie={movie} key={movie.title} />

                    ))}
            </div>
        </div>

    );
 
};

export default Films;