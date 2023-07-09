import { applyGlobalStyles } from './components/GlobalStyles/styles';
import Routes from './routes';

import { Toast } from './shared/components/Toast';
import { enableMapSet } from 'immer';

enableMapSet();

export const App = () => {
  applyGlobalStyles();

  return (
    <>
      <Toast />
      <Routes />
    </>
  );
};
