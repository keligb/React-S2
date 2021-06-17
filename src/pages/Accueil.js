import React from 'react';

const Accueil = () => {
    return (
        <div>
            <h1>Bienvenue sur mon app</h1>
            <div className="apis">
                <div className="PresentationSujet">
                    <h2>Présentation du sujet</h2>
                    <p>Correspondance Pays de production du film avec drapeau du pays qui est affiché depuis les données renvoyées par l'API "RestCountries"</p>
                </div>
                <div className="api-pays">
                    <h2>Présentation API Drapeaux</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae volutpat felis. Suspendisse tortor libero, sodales sed augue nec, cursus ullamcorper ipsum. Suspendisse odio lectus, porta ac mi vel, pharetra ullamcorper purus. Fusce non dapibus nisl. Sed vel convallis erat. Mauris efficitur, ex sit amet congue mattis, mauris purus congue lacus, vitae malesuada nibh mi nec ligula. Suspendisse ultrices, ante sed tempus interdum, odio augue eleifend sapien, vitae ullamcorper diam quam eu est. Pellentesque a pulvinar ipsum, vel lobortis urna. Pellentesque a hendrerit justo. Nullam euismod nisl vitae efficitur dictum. Nullam non sapien ut orci commodo euismod. Pellentesque ultricies, risus vitae porta vulputate, tellus erat condimentum massa, eget suscipit diam lorem id purus. Vestibulum a malesuada erat, in pellentesque nunc. Donec cursus non tellus sed feugiat.</p>
                    <a href="https://restcountries.eu">Lien vers l'API</a>
                </div>
                <div className="api-films">
                    <h2>Présentation API Films</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae volutpat felis. Suspendisse tortor libero, sodales sed augue nec, cursus ullamcorper ipsum. Suspendisse odio lectus, porta ac mi vel, pharetra ullamcorper purus. Fusce non dapibus nisl. Sed vel convallis erat. Mauris efficitur, ex sit amet congue mattis, mauris purus congue lacus, vitae malesuada nibh mi nec ligula. Suspendisse ultrices, ante sed tempus interdum, odio augue eleifend sapien, vitae ullamcorper diam quam eu est. Pellentesque a pulvinar ipsum, vel lobortis urna. Pellentesque a hendrerit justo. Nullam euismod nisl vitae efficitur dictum. Nullam non sapien ut orci commodo euismod. Pellentesque ultricies, risus vitae porta vulputate, tellus erat condimentum massa, eget suscipit diam lorem id purus. Vestibulum a malesuada erat, in pellentesque nunc. Donec cursus non tellus sed feugiat.</p>
                    <a href="https://www.themoviedb.org/?language=fr-FR">Liens vers l'API</a>
                </div>
            </div>
            
        </div>
    );
};

export default Accueil;