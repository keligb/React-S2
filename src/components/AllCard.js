import React from 'react';

const AllCard = (props) => {

    const { country } = props;
    // const { movie } = props;
    console.log(country);

    return (
        <p>TEST</p>
    //    <li>
    //        <div>
    //            <ul>
    //                <li>Nom du film : {movie.title}</li>
    //                <li>Résumé : {movie.overview}</li>
    //                <li>Date sortie</li>
    //            </ul>

    //         <img src={country.flag} alt="flag" />

    //        </div>
    //    </li>
    );
};

export default AllCard;