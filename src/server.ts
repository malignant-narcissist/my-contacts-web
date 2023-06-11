import { CardType } from './pages/Home/components/ContactList/hooks/types';
import { Response, createServer } from 'miragejs';

const makeServer = () => {
  const server = createServer({
    seeds(server) {
      server.schema.db.createCollection('contacts', [
        {
          id: '1',
          email: 'asta@mail.com',
          name: 'Asta Zogratis',
          phone: '(66) 66666-6666',
        },
        {
          id: '2',
          email: 'lucius@mail.com',
          name: 'Lucius Zogratis',
          phone: '(91) 97800-8768'
        },
        {
          id: '3',
          email: 'yuno@mail.com',
          name: 'Yuno Grinberryall',
          phone: '(69) 95472-4567'
        }
      ] satisfies CardType[]);
    },
    routes() {
      this.urlPrefix = import.meta.env.VITE_API_BASE_URL;

      this.namespace = 'contacts';

      this.get('', (schema, request) => {
        const { queryParams } = request;

        return new Response(
          200,
          undefined,
          queryParams.name
            ? schema.db.contacts.filter((item: CardType) => {
                return item.name.includes(queryParams.name);
              })
            : schema.db.contacts,
        );
      });
    },
  });

  return server;
};

export { makeServer };
