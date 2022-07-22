import { Link } from 'react-router-dom';
import logo from '../img/etMerdeLogo.png';

const Welcome = () => {

    return (
        <div className="welcome">
            <header>
                <h1>Et merde...</h1>
                <img src={logo} alt="" />
                <p>Le moment où tu réalise que t'as fait du caca</p>
                <Link className="ajouter" to="/ajouter">Raconter mon histoire</Link>
            </header>
        </div>
        
    );
}

export default Welcome;