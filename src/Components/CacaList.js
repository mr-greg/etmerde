import { Link } from "react-router-dom";

const CacaList = ({histoires}) => {


    return (
        <div className="histoire-list">
            {histoires.map( (histoire) => (
                <div className="histoire-preview" key={histoire.id}>
                    <h2>{ histoire.titre }</h2>
                    <p>{ histoire.corps }</p>
                    <p>Écrit par { histoire.auteur }</p>
                    <Link className="link" to={`/caca/${histoire.id}`}>
                        <p className="modify">Modifier</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default CacaList;