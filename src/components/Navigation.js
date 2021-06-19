import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="ul-menu">
                <li className="li-menu"><a className="a-menu" href="/">Accueil</a></li>
                <li className="li-menu"><a className="a-menu" href="/pays">Pays</a></li>
                <li className="li-menu deroulant"><a className="a-menu" href="#">Films</a>
                    <ul className="sous">
                        <li className="li-menu-sous"><a href="/popular">Les plus populaires</a></li><br />
                        <li className="li-menu-sous"><a href="/movie-top-rated">Les mieux notés</a></li><br />
                        <li className="li-menu-sous"><a href="">Dernière sortie</a></li><br />
                    </ul>
                </li>
                <li className="li-menu"><a className="a-menu" href="/all">All</a></li>
            </ul>
        </nav>
    );
};

//Ajouter liste déroulante sur les onglets du menu

export default Navigation;