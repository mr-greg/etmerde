import Caca from './utils/Caca';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="contenu">
        <Welcome />
        <Caca />
      </div>
    </Router>
       
  );
}

export default App;
