import React from 'react';
import fleche from '../img/fleche.png';
// import AllCard from "../components/AllCard";
import axios from "axios";
import { useEffect, useState } from 'react';


const All = () => {

    const[data, setData] = useState([]);
    const[dataCountryAPI, setDataCountryAPI] = useState([]);
    const[country, setCountry] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);
    const countryString = country.toString();
    let random_id = Math.floor(Math.random() * 900);
    let random_id_string = random_id.toString();



    useEffect(function test() { 


            if (playOnce) {
                
                axios.get('https://api.themoviedb.org/3/movie/'+ random_id_string +'?api_key=5636896476671aba8ef68c6d957147d1')
                .then((res) => {
    
                    setData(res.data);
                    setCountry(res.data.production_countries[0].name);
                    setPlayOnce(false);
                    console.log(data);
                    
                });
                
            }

    }, [data, country, playOnce]);

    useEffect(() => { 

        for (let i = 0 ;  i < 1 ; i++){

            axios.get('https://restcountries.eu/rest/v2/name/' + countryString)
            .then((res) => {
                setDataCountryAPI(res.data[0]);
            });
            
        }

    }, [dataCountryAPI, playOnce]);


    return (

        <div>
            {/* <h1>Détail du film (API Films + API Drapeaux)</h1> */}
            
            <div className="container-all">
                <h1 className="title-movie-all">{data.title}</h1>
                <div className="img-flex-all">
                    <img className="img-all-movie" src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}/>
                    <img className="imd-arrow-all" src={fleche} />
                    <img className="img-all-country" src={dataCountryAPI.flag} />
                </div>
                <div className="details-all">
                    <h2>Titre original : {data.original_title}</h2>
                    <p>Date de sortie : {data.release_date}</p>
                    <p>Durée : {data.runtime} mn</p>
                    <p>Pays de production : {country}</p>
                    <p className="resume-movie-all">Résumé : {data.overview}</p>
                </div>
            </div>
            
        </div>
    );
};

export default All;