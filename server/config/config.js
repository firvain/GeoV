module.exports = {
  connection: {
    host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'YOUR_MYSQL_DB',
    application_name: 'GeoV',
    fallback_application_name: 'GeoV',
  },
  auth0: {
    AUTH0_CLIENT_ID: 'b0X9YFZ2tXpIH8q9D1qnkCR5MettYkly',
    AUTH0_CLIENT_SECRET: 'lod68mQj9oRtsjdHX34JzYgrkuC9R9lLJ5PVt7OzEHr7Ld-7yRuCyTkxh3EBCbyq',
    AUTH0_DOMAIN: 'terracognita.eu.auth0.com',
    AUTH0_CALLBACK_URL: 'http://127.0.0.1:8080/callback',
  },
};
