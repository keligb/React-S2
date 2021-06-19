import React from 'react';
import clap from '../img/clap.png';
import earth from '../img/earth.png';

const Accueil = () => {
    return (
        <div>
            <div className="header-accueil">
                <img className="img-clap" src={clap} />
                <h1 className="titre-page">Bienvenue sur mon app</h1>
                <img className="img-earth" src={earth} />
            </div>

            <div className="presentation">
                <h2>Présentation du sujet</h2>
                <p>Pour cette soutenance, j'ai choisis d'utiliser une API qui renvoie des films et une autre qui renvoie des pays.< br/>
                    Cette application se compose de 3 pages principales :   
                </p>
                <ul>
                    <li> - Pays : affiche les informations sur un Pays dont le drapeau</li>
                    <li> - Films : présente des affiches de films avec leur titre</li>
                    <li> - All : Affiche un film depuis l'API Movie et le drapeau qui correspond au pays de production du film depuis l'API drapeau</li>
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