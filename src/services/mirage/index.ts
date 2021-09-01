import { createServer, Factory, Model } from "miragejs";
import faker from "faker";


type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({

      })
    },

    factories: {
      user: Factory.extend({
        name(index) {
          return `${faker.name.firstName(index % 2 === 0 ? 0 : 1)} ${faker.name.lastName(index % 2 === 0 ? 0 : 1)}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10, new Date());
        }
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}