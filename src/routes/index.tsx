import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashbord from '../pages/Dashbord';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashbord} exact />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
