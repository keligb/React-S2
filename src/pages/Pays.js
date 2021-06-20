import React from 'react';
import axios from "axios";
import Card from "../components/Country-Card";
import { useEffect, useState } from 'react';

const Pays = () => {
    const[data, setData] = useState([]);
    const[playOnce, setPlayOnce] = useState(true);

    useEffect(() => { 
        if (playOnce) {
            axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((res) => {
                setData(res.data);
                setPlayOnce(false);
            });
        }


    }, [data, playOnce]);

    console.log(data);

    return (
        <div>
            <h1 className="titre-page">API Drapeaux</h1>

            <ul>
                {data.map((country) => (
                    <Card country={country} key={country.name} />
                ))}
            </ul>

        </div>
    );
};

export default Pays;