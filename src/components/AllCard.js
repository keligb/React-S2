import React from 'react';

const AllCard = (props) => {

    const { country } = props;
    console.log(country);

    return (
       <li>
           <div>
               <ul>
                   <li>Nom du film : {country.title}</li>
                   <li>Résumé : {country.overview}</li>
                   <li>Date sortie</li>
               </ul>
           </div>
       </li>
    );
};

export default AllCard;