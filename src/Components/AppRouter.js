import React, {
  Fragment
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { Dashboard } from '../Components/Dashboard.js'
import { Upload } from '../Components/Upload.js'
import { Rules } from '../Components/Rules.js'
import { EndemicDefault } from '../Components/EndemicDefault.js'


export const AppRouter = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/dashboard/" component={Dashboard}/>
          <Route exact path="/upload/" component={Upload}/>
          <Route exact path="/rules/" component={Rules}/>
          <Route exact path="/endemicdefault" component={EndemicDefault}/>
          <Redirect to="/endemicdefault"/>
        </Switch>
      </Router>
    </Fragment>

    
  )
}


