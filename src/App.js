import Caca from './utils/Caca';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './utils/Create';
import CacaDetails from './Components/CacaDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="contenu">
        <Switch>
          <Route exact path="/">
            <Welcome />
            <Caca />
          </Route>
          <Route path="/ajouter">
            <Create />
          </Route>
          <Route path="/caca/:id">
            <CacaDetails />
          </Route>
          <Route>
            <NotFound path="*" />
          </Route>
        </Switch>
      </div>
    </Router>
       
  );
}

export default App;
