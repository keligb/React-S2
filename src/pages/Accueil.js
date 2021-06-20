import React from 'react';
import clap from '../img/clap.png';
import earth from '../img/earth.png';

const Accueil = () => {
    return (
        <div>
            <div className="header">
                <img className="img-clap" src={clap} />
                <h1 className="titre-page">Bienvenue sur mon app</h1>
                <img className="img-earth" src={earth} />
            </div>

            <div className="presentation">
                <h2 className="h2-pres-sujet">Présentation du sujet</h2>
                <p>Pour cette soutenance, j'ai choisi d'associer deux API, une qui renvoie des films, l'autre des pays.< br/>
                    <br />
                    L'application se compose de 3 pages principales :   
                </p>
                <ul>
                    <li> - Pays : affiche tous les drapeaux que retourne l'API, plus 3 informations (nom du pays, capitale, population)</li>
                    <li> - Films : reprend les affiches de films classés en trois catégories (les plus populaires, les mieux notés et les films à l'affiche)</li>
                    <li> - All : associe un film au drapeau qui correspond au pays de production</li>
                </ul>

            </div>

            <div className="link-pres">
                <div className="button-pres">
                    <a href="/pres-drapeaux-API">Présentation de l'API "RestCountries"</a>
                </div>
                <div className="button-pres">
                    <a href="/pres-films-API">Présentation de l'API "MovieDatabase"</a>
                </div>
            </div>
            
        </div>
    );
};

export default Accueil;