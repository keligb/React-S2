import React from "react";

const Card = (props) => {

    
    const { country } = props;
    
    return (
        <li className="card">
            <img className="img-card" src={country.flag} alt="flag" />
            <div className="data-container">
                <ul className="ul-card">
                    <li className="li-card">{country.name}</li>
                    <li className="li-card">{country.capital}</li>
                    <li className="li-card">Pop. {country.population}</li>
                </ul>
            </div>
        </li>
    );
}

export default Card;