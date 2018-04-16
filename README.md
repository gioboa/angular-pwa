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
&nbsp;&nbsp;"async": true, <br />
&nbsp;&nbsp;"crossDomain": true, <br />
&nbsp;&nbsp;"url": "http://localhost:8080/notify", <- your server ip <br />
&nbsp;&nbsp;"method": "POST", <br />
&nbsp;&nbsp;"headers": { <br />
&nbsp;&nbsp;&nbsp;&nbsp;"accept": "application/json, text/plain, _/_", <br />
&nbsp;&nbsp;&nbsp;&nbsp;"origin": "http://localhost:8081", <br />
&nbsp;&nbsp;&nbsp;&nbsp;"content-type": "application/json", <br />
&nbsp;&nbsp;&nbsp;&nbsp;"referer": "http://localhost:8081/", <br />
&nbsp;&nbsp;&nbsp;&nbsp;"accept-encoding": "gzip, deflate, br", <br />
&nbsp;&nbsp;&nbsp;&nbsp;"accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7", <br />
&nbsp;&nbsp;&nbsp;&nbsp;"auth-secret": "ALL", <- this is the secret code store in server.js <br />
&nbsp;&nbsp;&nbsp;&nbsp;"cache-control": "no-cache", <br />
&nbsp;&nbsp;} <br />
} <br />
