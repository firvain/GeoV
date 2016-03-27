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
    AUTH0_CLIENT_ID: '6hbMw33jaFwwnBLcd1IVcJFhGeqLNyZR',
    AUTH0_CLIENT_SECRET: 'GxdpBofr-UozXstRDKTiQRDWGTDrdmzQif9iq4lN4DbihxavbbWQqXjaMbL2mdIz',
    AUTH0_DOMAIN: 'terracognita.eu.auth0.com',
    AUTH0_CALLBACK_URL: 'http://127.0.0.1:3000/map/callback',
  },
};
