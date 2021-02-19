
import './App.css';
import { Request }  from './features/Http/Request';
import { pages } from './features/Pages/page';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




function App() {
   Request.setDestination("http://ignuserapi.ign.test/api/test");
   const routeComponents = pages.map(({slug,component},key) => <Route path={slug} exact component={component}/>)
  return (
   
    <div className="App">
      
      <Router>
      <Switch>
         {routeComponents}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
