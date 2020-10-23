
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from '../src/screens/Landing'
import OrphanagesMap from '../src/screens/OrphanagesMap'
import Orphanage from '../src/screens/Ophanage'
import CreateOrphanage from '../src/screens/CreateOrphanage'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
        <Route path="/orphanages/create" component={CreateOrphanage}/>
        <Route path="/orphanages/:id" component={Orphanage}/>
      </Switch>      
    </BrowserRouter>
  );
}

export default Routes;