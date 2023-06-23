import { AddContact } from '../pages/AddContact';
import { EditContact, Props as EditContactProps } from '../pages/EditContact';
import { Home } from '../pages/Home';
import { Route, Router } from 'wouter-preact';

const routes = () => {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/add' component={AddContact} />
      <Route<EditContactProps> path='/edit/:contactId'>
        {(params) => <EditContact contactId={params.contactId} />}
      </Route>
    </Router>
  );
};

export default routes;
