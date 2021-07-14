import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Landing from '../pages/index';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
