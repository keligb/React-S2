import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="ul-menu">
                <li className="li-menu deroulant"><a className="a-menu" href="/">Accueil</a>
                    <ul className="sous">
                        <li><a href="/pres-drapeaux-API">RestCountries</a></li>
                        <li><a href="/pres-films-API">MovieDatabase</a></li>
                    </ul>
                </li>
                <li className="li-menu"><a className="a-menu" href="/pays">Pays</a></li>
                <li className="li-menu deroulant"><a className="a-menu" href="#">Films</a>
                    <ul className="sous">
                        <li><a href="/popular">Les plus populaires</a></li>
                        <li><a href="/movie-top-rated">Les mieux notés</a></li>
                        <li><a href="/movie-now-playing">Au cinéma</a></li>
                    </ul>
                </li>
                <li className="li-menu"><a className="a-menu" href="/all">All</a></li>
            </ul>
        </nav>
    );
};

//Ajouter liste déroulante sur les onglets du menu

export default Navigation;