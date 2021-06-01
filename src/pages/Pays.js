import React from 'react';
import axios from "axios";
import Card from "../components/Country-Card";
import { useEffect, useState } from 'react';

const Pays = () => {
    const[data, setData] = useState([]);
    // const[data2, setData] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);


    // useEffect(() => { 
    //     if (playOnce) {
    //         axios.get('https://api.thecatapi.com/v1/images/search')
    //         .then((res) => {
    //             setData(res.data);
    //             setPlayOnce(false);
    //             console.log(res.data);
    //         });
    //     }
    // }, [data, playOnce]);

    useEffect(() => { 
        if (playOnce) {
            axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((res) => {
                setData(res.data);
                setPlayOnce(false);
                console.log(res.data);
            });
        }


    }, [data, playOnce]);

    // useEffect(() => { 
    //     if (playOnce) {
    //         axios.get('http://api.weatherstack.com/current?access_key=e3958ba6f7e2310d7eacdd2786563c47&query=Paris')
    //         .then((res2) => {
    //             setData2(res2.data.location);
    //             // setData(res.data.location);
    //             setPlayOnce(false);
    //             console.log(res2.data.location);
    //         });
    //     }
    // }, [data2, playOnce]);

    // https://newsapi.org/v2/everything?q=Apple&from=2021-05-28&sortBy=popularity&apiKey=c779b69affed4efe94a1e48ab6479c62
    // https://dog.ceo/api/breeds/image/random
    // http://superheroapi.com/api/3499784910247295/644
    // http://api.weatherstack.com/current?access_key=e3958ba6f7e2310d7eacdd2786563c47&query=Paris
    // https://pokeapi.co/api/v2/pokemon/ditto
    // https://newsapi.org/v2/everything?q=tesla&from=2021-04-27&sortBy=publishedAt&apiKey=c779b69affed4efe94a1e48ab6479c62
    // http://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=CRNSRVQqUXMCLwYxAnQCKwdvDzpcKlVyVipQM1w5UC0JYlAxAmJQNlE%2FBnsFKgQyUH0BYlxnCDgKYVcvAXNUNQljUj5UP1E2Am0GYwItAikHKQ9uXHxVclY8UDZcL1AyCWxQPQJ%2FUDBROgZmBSsEMlBiAWJcfAgvCmhXNgFuVDUJaFI3VDVRMAJvBmECLQIpBzIPb1wxVW1WY1BiXGRQNgk%2BUGICYVBhUWoGZgUrBDdQYAFoXGQINgpvVzUBblQoCXVST1REUS4CLQYmAmcCcAcpDzpcPVU5&_c=4c648b12e95f0287eabebd90ed1145cd
    
    // for (let i = 0; i < 4; i++){
        // return(
            // <div>
            //     <img src={data[i].flag} />
            // </div>
        // );
        // console.log("coucou" + i);

    // }

    return (
        <div>
            <h1>API Drapeaux</h1>

            <ul>
                {data.map((country) => (
                    <Card country={country} key={country.name} />
                ))}
            </ul>
        </div>
    );
};

//API Animals

export default Pays;