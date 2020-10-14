
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from '../src/screens/Landing'
import OrphanagesMap from '../src/screens/OrphanagesMap'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
      </Switch>      
    </BrowserRouter>
  );
}

export default Routes;