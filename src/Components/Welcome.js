import logo from '../img/etMerdeLogo.png';
import Caca from '../utils/Caca';

const Welcome = () => {

    const handleClick = () => {
        console.log('coucou');
    }

    return (
        <div className="welcome">
            <header>
                <h1>Et merde...</h1>
                <img src={logo} alt="" />
                <p>Le moment où tu réalise que t'as fait du caca</p>
                <button onClick={handleClick}>Raconter mon histoire</button>
            </header>
        </div> 
        
    );
}

export default Welcome;