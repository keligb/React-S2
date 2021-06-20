import React from 'react';
import MovieDatabase_img from '../img/Moviedatabase.png';
import popcorn from '../img/popcorn.png';

const pres_API_films = () => {
    return (
        <div>

            <div className="header">
                <img className="img-api-pres-films-left" src={popcorn} />
                <h1 className="titre-page">Présentation API "MovieDatabase"</h1>
                <img className="img-api-pres-films-right" src={popcorn} />
            </div>

            <div className="presentation-films">
                <p>L'API "MovieDatabase" retourne une liste de films et fournit des informations tels que le titre, le genre, le résumé, ou encore la date de sortie.<br/></p>
                <p>Il est possible de trier les films que l'on souhaite récupérer, d'afficher les plus populaires ou les mieux notés par exemple.<br />
                Pour pouvoir utiliser l'API, il faut générer au préalable une clé API via le site internet.<br />
                La documentation recense les urls à utiliser en fonction de ce qu'on veut afficher.<br />
                Elle est disponible à cette adresse : <a className="link-doc-api" href="https://developers.themoviedb.org/3/getting-started/introduction" target="blank">Voir la documentation</a></p>
                
                <div className="button-pres-api">
                    <a className="link-pres-api" href="https://www.themoviedb.org/?language=fr-FR" target="blank">Lien vers l'API</a>
                </div>
            </div>

            <h2 className="h2-pres">Exemple de ce que renvoie l'API :</h2>

            <div className="container-img-pres-movie">
                <img className="img-pres-movie" src={MovieDatabase_img} />
            </div>
        </div>
    );
};

export default pres_API_films;