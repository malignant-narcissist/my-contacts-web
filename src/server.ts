import { CardType } from './pages/Home/components/ContactList/hooks/types';
import { Response, createServer } from 'miragejs';

const makeServer = () => {
  // rome-ignore lint/style/useConst: <explanation>
  let server = createServer({
    routes() {
      this.urlPrefix = import.meta.env.VITE_API_BASE_URL;

      this.namespace = 'contacts';

      this.get(
        '',
        () => {
          return new Response(200, undefined, [
            {
              id: '1',
              email: 'asta@mail.com',
              name: 'Asta Zogratis',
              phone: '(66) 66666-6666',
            },
          ] satisfies CardType[]);
        },
      );
    },
  });

  return server;
};

export { makeServer };
