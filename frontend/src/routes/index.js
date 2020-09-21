import React from 'react';

import { Switch } from 'react-router-dom';
import { AuthProvider } from '../hooks/auth';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import AddClient from '../pages/AddClient';

const Routes = () => (
  <AuthProvider>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/validar" component={Dashboard} isPrivate />
      <Route path="/registrar" component={AddClient} />
    </Switch>
  </AuthProvider>
);

export default Routes;
