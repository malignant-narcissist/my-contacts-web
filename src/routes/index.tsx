import { Home } from '../pages/Home';
import { Route, Router } from 'wouter-preact';

const routes = () => {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
};

export default routes;
