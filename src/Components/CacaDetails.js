import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const CacaDetails = () => {

    const { id } = useParams();
    const { data: histoire, error } = useFetch('http://localhost:8000/histoires/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/histoires/' + histoire.id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/');
        })
    }

    return (
        <div className="pageCacaDetails">
            <h1>Détails de votre Caca</h1>
            <div className="contenuCacaDetails">     
                <div className="cacaDetails">
                    { error && <div>{ error }</div> }
                    { histoire && (
                        <div className="cacaPreview">
                            <h2>{ histoire.titre }</h2>
                            <p>{ histoire.corps }</p>
                            <p>Écrit par { histoire.auteur }</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="buttons">
                <Link className="modifier buttonMainStyle">Modifier</Link>
                <Link className="retour buttonMainStyle" to="/">Retourner à l'accueil</Link>
                <Link className="supprimer buttonMainStyle" onClick={handleClick}>Supprimer</Link>
            </div>


        </div>

        
        
    );
}
 
export default CacaDetails;