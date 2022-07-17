import CacaList from "../Components/CacaList";
import useFetch from "./useFetch";

const Caca = () => {
    
    const { data, error } = useFetch('http://localhost:8000/histoires');
    
    return (
        <div className="listeCaca">
            { error && <div>{ error }</div> }
            { data && <CacaList histoires={data} /> }
        </div>
    );
}
 
export default Caca;