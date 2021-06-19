import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import MostRated_Card from "../components/Most_Rated_Movie_Card";

const Films_note = () => {
    const[data, setData] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);
    
    useEffect(() =>{
        if (playOnce){
            axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5636896476671aba8ef68c6d957147d1')
            .then((res) => {
                setData(res.data.results);
                setPlayOnce(false);
                console.log(res.data.results);
            });
        }
    },[data, playOnce]);

    return (

        <div>
            <h1 className="titre-page">Les mieux notés :</h1>
            <div className="container">
                {data.map((MostRated) => (
                    <MostRated_Card MostRated={MostRated} />
                ))}
            </div>
        </div>
    );
};

export default Films_note;