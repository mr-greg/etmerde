import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const CacaDetails = () => {

    // Récupération de l'ID
    const { id } = useParams();
    const { data: histoire, error } = useFetch('http://localhost:8000/histoires/' + id);
    // Récupération du Hook history
    const history = useHistory();
    // HandleClick bouton supprimer
    const handleClick = () => {
        fetch('http://localhost:8000/histoires/' + histoire.id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/');
        })
    }

    // Gestion de l'affichage du formulaire de modification (false = display none)
    const [isModifying, setIsModifying] = useState(false);
    const handleClickModify = () => {
        setIsModifying(true);
    }
    const handleClickModifyCancel = () => {
        setIsModifying(false);
    }

    // Set notre loading durant le fetch
    const [isLoading, setIsLoading] = useState(false)

    // Récupération des valeurs dans les inputs du formulaire de modification
    const [titre, setTitre] = useState('');
    const [corps, setCorps] = useState('');
    const [auteur, setAuteur] = useState('');

    // Gestion du Submit "confirmer" de la modification
    const handleSubmit = (e) => {
        e.preventDefault();
        const histoireFetch = {titre, corps, auteur};
        setIsLoading(true);

        // Suppression de l'ancien poste
        fetch('http://localhost:8000/histoires/' + histoire.id, {
            method: 'DELETE'
        }).then( () => {
            console.log("histoire supprimée")
        })

        // Ajout du nouveau poste
        fetch('http://localhost:8000/histoires', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(histoireFetch)
        }).then( () => {
            setIsLoading(false);
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

            <div className="buttonsDetails">
                <button className="modifier buttonMainStyle" onClick={handleClickModify}>Modifier</button>
                <Link className="retour buttonMainStyle" to="/">Retourner à l'accueil</Link>
                <button className="supprimer buttonMainStyle" onClick={handleClick}>Supprimer</button>
            </div>

            { histoire && (
                <div className="formulaireModif"
                    style={{display: isModifying ? '' : 'none'}}
                >
                <h3>Modification</h3>
                <div className="separateur"></div>
                <form>
                    <label>Titre</label>
                    <input
                        type="text"
                        required
                        onChange={ (e) => setTitre(e.target.value) }
                    />

                    <label>Histoire</label>
                    <textarea
                        type="text"
                        required
                        // minLength="50"
                        onChange={ (e) => setCorps(e.target.value) }
                    />

                    <label>Auteur</label>
                    <select
                        type="text"
                        onChange={ (e) => setAuteur(e.target.value) }
                    >
                        <option value="Zaack">Zaack</option>
                        <option value="Léna">Léna</option>
                    </select>

                    { !isLoading && <button className="buttonMainStyle buttonModifier" onClick={handleSubmit}>Confirmer</button> }
                    { isLoading && <button className="buttonMainStyle buttonModifier">Modifier</button>}
                    
                </form>
                <button className="buttonMainStyle buttonAnnuler" onClick={handleClickModifyCancel}>Annuler</button>
            </div>
            )}
            
        </div>

        
        
    );
}
 
export default CacaDetails;