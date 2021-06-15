import React from 'react';
import AllCard from "../components/AllCard";

const All = () => {

    return (
        <div>
            <h1>API Films + API Drapeaux</h1>

            <AllCard country={country} key={country.name}/>
        </div>
    );
};

export default All;