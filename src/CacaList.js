
const CacaList = (props) => {
    const histoires = props.histoires;
    console.log(histoires);

    return (
        <div className="blog-list">
            {histoires.map( (histoire) => (
                <div className="histoire-preview" key={histoire.id}>
                    <h2>{ histoire.titre }</h2>
                    <p>Written by { histoire.auteur }</p>
                </div>
            ))}
        </div>
    );
}
 
export default CacaList;