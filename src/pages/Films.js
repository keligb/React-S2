import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

const Films = () => {
    const[data, setData] = useState([]);
    const[country, setCountry] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);


    useEffect(() => { 
        if (playOnce) {
            axios.get('https://api.themoviedb.org/3/movie/157336?api_key=5636896476671aba8ef68c6d957147d1')
            .then((res) => {
                setData(res.data);
                setCountry(res.data.production_countries[0])
                setPlayOnce(false);
                console.log(res.data);
            });
        }
    }, [data, country, playOnce]);

    // https://api.ipgeolocationapi.com/geolocate/91.213.103.0
    // https://api.nookipedia.com/villagers

    return (
        <div>
            <h1>API Films</h1> 

            <p>{country.name}</p>
            <p>{data.original_title}</p>
            <p>{data.overview}</p>
            {/* <img src={data.poster_path} /> */}
            {/* <p>{data.name}</p> */} 
        </div>

    );
};

//API Films

export default Films;