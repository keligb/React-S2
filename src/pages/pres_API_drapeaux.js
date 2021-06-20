import React from 'react';
import RestCountries_img from '../img/RestCountries.png';
import drapeau_fr from '../img/drapeau_fr.png';

const pres_API_drapeaux = () => {
    return (
        <div>
            <div className="header">
                <img className="img-api-pres" src={drapeau_fr} />
                <h1 className="titre-page">Présentation API "RestCountries"</h1>
                <img className="img-api-pres" src={drapeau_fr} />
            </div>

            <div className="presentation">
                <p>L'API "RestCountries" retourne une liste de pays et fournit des informations tels que le nom de la capitale, le population et le drapeau.<br/>
                Il est possible de trier les informations que l'on souhaite récupérer en ajoutant un filtre dans l'url.<br />
                La documentation recense les urls à utiliser en fonction de ce qu'on veut afficher.<br />
                Elle est disponible à cette adresse : <a className="link-doc-api" href="https://restcountries.eu" target="blank">Voir la documentation</a></p>
                
                <div className="button-pres-api">
                    <a className="link-pres-api" href="https://restcountries.eu" target="blank">Lien vers l'API</a>
                </div>
            </div>

            <h2 className="h2-pres">Exemple de ce que renvoie l'API :</h2>

            <div className="container-img-pres">
                <img className="img-pres" src={RestCountries_img} />
            </div>
        </div>
    );
};

export default pres_API_drapeaux;