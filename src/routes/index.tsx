import { AddContact } from '../pages/AddContact';
import { Home } from '../pages/Home';
import { Route, Router } from 'wouter-preact';

const routes = () => {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/add' component={AddContact} />
    </Router>
  );
};

export default routes;
