'use strict';
const environment = process.env.NODE_ENV || 'development';
const config = {
  development: {
    connection: {
      user: 'etsipis',
      database: 'GeoV',
      password: 'TR81VH83YH1WrSqjeblH',
      port: 5432,
      host: '188.226.158.168',
      ssl: false,
      application_name: 'GeoV',
      fallback_application_name: 'GeoV',
    },
    auth0: {
      AUTH0_CLIENT_ID: 'b0X9YFZ2tXpIH8q9D1qnkCR5MettYkly',
      AUTH0_CLIENT_SECRET: 'lod68mQj9oRtsjdHX34JzYgrkuC9R9lLJ5PVt7OzEHr7Ld-7yRuCyTkxh3EBCbyq',
      AUTH0_DOMAIN: 'terracognita.eu.auth0.com',
      AUTH0_CALLBACK_URL: 'http://127.0.0.1:8080/callback',
    },
    endpoint: 'http://127.0.0.1:8080',
  },
  production: {
    connection: {
      user: 'etsipis',
      database: 'GeoV',
      password: 'TR81VH83YH1WrSqjeblH',
      port: 5432,
      host: '127.0.0.1',
      ssl: false,
      application_name: 'GeoV',
      fallback_application_name: 'GeoV',
    },
    auth0: {
      AUTH0_CLIENT_ID: 'b0X9YFZ2tXpIH8q9D1qnkCR5MettYkly',
      AUTH0_CLIENT_SECRET: 'lod68mQj9oRtsjdHX34JzYgrkuC9R9lLJ5PVt7OzEHr7Ld-7yRuCyTkxh3EBCbyq',
      AUTH0_DOMAIN: 'terracognita.eu.auth0.com',
      AUTH0_CALLBACK_URL: 'http://127.0.0.1:8080/callback',
    },
    endpoint: 'http://188.226.158.168',
  },

};
if (environment === 'production') {
  module.exports = config.production;
} else {
  module.exports = config.development;
}
