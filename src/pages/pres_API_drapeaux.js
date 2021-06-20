import React from 'react';
import test from '../img/test.png';
import RestCountries1 from '../img/RestCountries_1.png';
import RestCountries2 from '../img/RestCountries_2.png';

const pres_API_drapeaux = () => {
    return (
        <div>
            <h1 className="titre-page">Présentation API "RestCountries"</h1>
            <div className="presentation">
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

            <div className="container-img-pres">
                <img className="img-pres-drapeaux" src={RestCountries1} />
                <img className="img-pres-drapeaux" src={RestCountries2} />
            </div>
        </div>
    );
};

export default pres_API_drapeaux;