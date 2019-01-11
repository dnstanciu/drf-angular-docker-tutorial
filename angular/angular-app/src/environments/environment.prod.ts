export const environment = {
  production: true,
  apiUrl: 'http://<YOUR-DOMAIN-OR-IP-ADDRESS>/api', // TODO replace with domain or IP address
  auth: {
    clientID: 'YOUR-AUTH0-CLIENT-ID',
    domain: 'YOUR-AUTH0-DOMAIN', // e.g., you.auth0.com
    audience: 'http://djangoangularapi',//'YOUR-AUTH0-API-IDENTIFIER',
    auth0RedirectUri: 'http://<YOUR-DOMAIN-OR-IP-ADDRESS>/callback', // URL to return to after auth0 login
    auth0ReturnTo: 'http://<YOUR-DOMAIN-OR-IP-ADDRESS>', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
};
