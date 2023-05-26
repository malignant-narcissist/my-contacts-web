import { Route, Router } from 'wouter-preact';
import { Home } from '../pages/Home';

const routes = () => {
  return (
    <Router>
      <Route path='/' component={ Home } />
    </Router>
  );
};

export default routes;
