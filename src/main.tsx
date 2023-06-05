import { App } from './app.tsx';
import { makeServer } from './server';
import { render } from 'preact';

if (import.meta.env.DEV) {
  makeServer();
}

render(<App />, document.getElementById('app') as HTMLElement);
