import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

const Films_note = () => {
    const[data, setData] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);
    
    useEffect(() =>{
        if (playOnce){
            axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5636896476671aba8ef68c6d957147d1')
            .then((res) => {
                setData(res.data.results[0]);
                setPlayOnce(false);
                console.log(res.data.results[0]);
            });
        }
    },[data, playOnce]);

    return (
        <div>
            <p>{data.title}</p>
        </div>
    );
};

export default Films_note;