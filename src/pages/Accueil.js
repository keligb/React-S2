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

            <div className="apis">
                <div className="PresentationSujet">
                    <h2>Présentation du sujet</h2>
                    <p>Pour cette soutenance, j'ai choisis d'utiliser une API qui renvoie des films et une autre qui renvoie des pays.< br/>
                        Cette application se compose de 3 pages principales :   
                    </p>
                    <ul>
                        <li> - Pays : affiche les informations sur un Pays dont le drapeau</li> <br />
                        <li> - Films : présente des affiches de films avec leur titre</li> <br />
                        <li> - All : Affiche un film depuis l'API Movie et le drapeau qui correspond au pays de production du film depuis l'API drapeau</li><br />
                    </ul> <br />
                </div>

                <div className="api-pays">
                    <h2>Présentation API Drapeaux</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae volutpat felis. 
                        Suspendisse tortor libero, sodales sed augue nec, cursus ullamcorper ipsum. Suspendisse odio lectus, 
                        porta ac mi vel, pharetra ullamcorper purus. Fusce non dapibus nisl. Sed vel convallis erat. Mauris efficitur, 
                        ex sit amet congue mattis, mauris purus congue lacus, vitae malesuada nibh mi nec ligula. Suspendisse ultrices, 
                        ante sed tempus interdum, odio augue eleifend sapien, vitae ullamcorper diam quam eu est. 
                        Pellentesque a pulvinar ipsum, vel lobortis urna. Pellentesque a hendrerit justo. Nullam euismod nisl vitae efficitur dictum.
                         Nullam non sapien ut orci commodo euismod. Pellentesque ultricies, risus vitae porta vulputate, 
                         tellus erat condimentum massa, eget suscipit diam lorem id purus. Vestibulum a malesuada erat, in pellentesque nunc. 
                         Donec cursus non tellus sed feugiat.</p>
                    <a href="https://restcountries.eu">Lien vers l'API</a>
                </div>

                <div className="api-films">
                    <h2>Présentation API Films</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae volutpat felis. 
                        Suspendisse tortor libero, sodales sed augue nec, cursus ullamcorper ipsum. Suspendisse odio lectus, 
                        porta ac mi vel, pharetra ullamcorper purus. Fusce non dapibus nisl. 
                        Sed vel convallis erat. Mauris efficitur, ex sit amet congue mattis, mauris purus congue lacus, 
                        vitae malesuada nibh mi nec ligula. Suspendisse ultrices, ante sed tempus interdum, odio augue eleifend sapien, 
                        vitae ullamcorper diam quam eu est. Pellentesque a pulvinar ipsum, vel lobortis urna. 
                        Pellentesque a hendrerit justo. Nullam euismod nisl vitae efficitur dictum. 
                        Nullam non sapien ut orci commodo euismod. Pellentesque ultricies, risus vitae porta vulputate, 
                        tellus erat condimentum massa, eget suscipit diam lorem id purus. Vestibulum a malesuada erat, in pellentesque nunc. 
                        Donec cursus non tellus sed feugiat.</p>
                    <a href="https://www.themoviedb.org/?language=fr-FR">Liens vers l'API</a>
                </div>
            </div>
            
        </div>
    );
};

export default Accueil;