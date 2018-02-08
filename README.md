# angular-pwa

Angular PWA project with service worker, add to home screen feature and push notification.
You must build the application to get full functionality.

#build <br />

use 'npm run build' for build the application.

#start application <br />
Angular - npm run serve <br />
Server - from root 'cd ./server/ && node index.js' <br />

IMPORTANT <br />
use <br />
https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim?hl=it <br />
to prevent CORS origin error <br />

#how use server <br />

to fire notification use this settings
e.g.
var settings = {
"async": true,
"crossDomain": true,
"url": "http://localhost:8080/notify", <- your server ip
"method": "POST",
"headers": {
"accept": "application/json, text/plain, _/_",
"origin": "http://localhost:8081",
"x-devtools-emulate-network-conditions-client-id": "(70FB45AACD9B24AFB9FFB215A7C37525)",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36",
"content-type": "application/json",
"referer": "http://localhost:8081/",
"accept-encoding": "gzip, deflate, br",
"accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
"auth-secret": "ALL", <- this is the secret code store in server.js
"cache-control": "no-cache",
"postman-token": "0cd89759-fcb9-30b9-0bed-e7312e4d3880"
}
}
