const CacaList = ({histoires}) => {


    return (
        <div className="histoire-list">
            {histoires.map( (histoire) => (
                <div className="histoire-preview" key={histoire.id}>
                    <h2>{ histoire.titre }</h2>
                    <p>{ histoire.corps }</p>
                    <p>Written by { histoire.auteur }</p>
                </div>
            ))}
        </div>
    );
}
 
export default CacaList;