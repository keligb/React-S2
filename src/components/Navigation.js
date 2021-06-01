import React from 'react';

const Navigation = () => {
    return (
        <ul className="ul-menu">
            <li className="li-menu"><a className="a-menu" href="/">Accueil</a></li>
            <li className="li-menu"><a className="a-menu" href="/pays">Pays</a></li>
            <li className="li-menu"><a className="a-menu" href="/films">Films</a></li>
            <li className="li-menu"><a className="a-menu" href="/all">All</a></li>
        </ul>
    );
};

//Ajouter liste déroulante sur les onglets du menu

export default Navigation;