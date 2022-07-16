import { useState, useEffect } from 'react';
import logo from './/img/etMerdeLogo.png';
import CacaList from './CacaList';

const Welcome = () => {

    const [histoires, setHistoires] = useState(null);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch('http://localhost:8000/histoires')
            .then(res => {
                if (!res.ok) {
                    throw Error('impossible de fetch la data pour cette ressource !')
                }
                return res.json();
            })
            .then( (data) => {
                setHistoires(data);
                setError(null);
            })
            .catch( err => {
                setError(err.message);
            })
    }, [] );

    const handleClick = () => {
        console.log('coucou');
    }

    return ( 
        <header>
            <h1>Et merde...</h1>
            <img src={logo} alt="" />
            <p>Le moment où tu réalise que t'as fait du caca</p>
            <button onClick={handleClick}>Raconter mon histoire</button>
            { error && <div>{ error }</div>}
            {histoires && <CacaList histoires={histoires} />}
        </header>
    );
}

export default Welcome;