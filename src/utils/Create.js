import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Create = () => {

    //On applique un useState sur notre titre pour pouvoir le moduler de façon dynamique
    const [titre, setTitre] = useState('');
    const [corps, setCorps] = useState('');
    const [auteur, setAuteur] = useState('Léna');

    // On défini un useState loading en false par défaut
    const [isLoading, setIsLoading] = useState(false);

    // Hook useHistory pour redirection après ajout
    const history = useHistory();

    //Gestion du bouton ajouter
    const handleSubmit = (e) => {
        e.preventDefault();
        const histoire = {titre, corps, auteur};
        //Notre loading est true car c'est en cours d'ajout
        setIsLoading(true);

        // Envoie des données vers notre DB
        fetch('http://localhost:8000/histoires', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(histoire)
        }).then( () => {
            console.log('nouvelle histoire ajoutée');
            // On sort de la fonction d'ajout, on défini notre loading en false
            setIsLoading(false);
            history.push('/');
        })

    }


    return ( 
        <div className="create">
            <h2>Ajouter mon histoire de Caca</h2>

            <div className="formulaire">
                <form onSubmit={handleSubmit}>
                    <label>Titre</label>
                    <input
                        type="text"
                        required
                        value={titre}
                        onChange={ (e) => setTitre(e.target.value) }
                    />

                    <label>Histoire</label>
                    <textarea
                        required
                        value={corps}
                        onChange={ (e) => setCorps(e.target.value) }
                        minLength="50"
                    />

                    <label>Auteur</label>
                    <select
                        value={auteur}
                        onChange={ (e) => setAuteur(e.target.value) }
                    >
                        <option value="zaack">Zaack</option>
                        <option value="Léna">Léna</option>
                    </select>

                    
                    { !isLoading && <button className="buttonMainStyle">Ajouter</button> }
                    { isLoading && <button disabled className="buttonMainStyle">Ajout...</button>}
                    <Link className="link" to="/">
                        <button className="buttonMainStyle buttonLink">Retour</button>
                    </Link>

                </form>
            </div>

        </div>
    );
}
 
export default Create;

