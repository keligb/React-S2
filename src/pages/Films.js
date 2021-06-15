import React from 'react';
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react';


const Films = () => {
    const[data, setData] = useState([]);
    const[country, setCountry] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);


    useEffect( function test() { 

        // for (let i = 1373 ; i <= 1389  ; i++){

            if (playOnce) {
                axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5636896476671aba8ef68c6d957147d1')
                .then((res) => {
                    // for ( let i = 0 ; i < 3 ; i++){
                        // setData(res.data.results[i]);
                        // setCountry(res.data.production_countries[i]);
                        // console.log(res.data.results[i]);
                    // }
                    setData(res.data.results);
                    // setCountry(res.data.production_countries[2])
                    setPlayOnce(false);
                    console.log(res.data);
                    // afficherFilms(res.data);
                });
                
            }

            // afficherFilms();

            // function afficherFilms(){
                    // <div>
                    //     <h1>API Films</h1> 
                    //     <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}/>
                    //     <h2>{data.original_title}</h2>
                    //     <p>{data.overview}</p>
                    // </div>
            // }
        // }


        // for ( let i = 0 ; i < 3 ; i++){
            // setData(res.data.results[i]);
            // setCountry(res.data.production_countries[i]);
            // console.log(res.data.results[i]);
        // }

        // for (let i = 1370 ; i < 1388  ; i++){
        //     test(i);
        // }

    }, [data, playOnce]);

    // console.log(data);

    return(

        // <p>test</p>

        // function afficherFilms(data){
                // return (

        <div>
            <h1>API Films</h1> 
            <ul>
                {data.map((movie) => (

                    <MovieCard movie={movie} key={movie.title} />

                ))}
            </ul>
        </div>

        // <div>
        //     <h1>API Films</h1> 
        //     <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}/>
        //     <h2>{data.original_title}</h2>
        //     <p>{data.overview}</p>
        // </div>

                        

                    
                    
                    

                    // <div>
                    //     <h1>API Films</h1> 
                    //     <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}/>
                    //     <h2>{data.original_title}</h2>
                    //     <p>{data.overview}</p>

                    // </div>

    

                    

                // );
        // }
    );
 
};

// for (i = 0 ; i < 500 ; i++){
//     test(i);
// }

export default Films;

            {/* <a href={data.homepage}>Lien vers la page du film</a> */}
            {/* <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}/> */}
            {/* <p>{country.name}</p> */}
            {/* <h2>{data.original_title}</h2> */}
            {/* <p>{data.overview}</p> */}
            {/* <img src={data.poster_path} /> */}
            {/* <p>{data.name}</p> */} 