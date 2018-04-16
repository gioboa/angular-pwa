# angular-pwa

Angular PWA project with service worker, add to home screen feature and push notification.
You must build the application to get full functionality.

## build <br />

use 'npm run build' for build the application.

## start application <br />
Angular - npm run serve <br />
Server - from root 'cd ./server/ && node index.js' <br />

IMPORTANT <br />
use <br />
https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim?hl=it <br />
to prevent CORS origin error <br />

## how use server <br />

to fire notification use this settings <br />
e.g. <br />
var settings = { <br />
  "async": true, <br />
  "crossDomain": true, <br />
  "url": "http://localhost:8080/notify", <- your server ip <br />
  "method": "POST", <br />
  "headers": { <br />
    "accept": "application/json, text/plain, _/_", <br />
    "origin": "http://localhost:8081", <br />
    "content-type": "application/json", <br />
    "referer": "http://localhost:8081/", <br />
    "accept-encoding": "gzip, deflate, br", <br />
    "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7", <br />
    "auth-secret": "ALL", <- this is the secret code store in server.js <br />
    "cache-control": "no-cache", <br />
  } <br />
} <br />
