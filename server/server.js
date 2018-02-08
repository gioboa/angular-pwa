/**
 * Created by thihara on 12/9/16.
 */
let express = require('express');
let webPush = require('web-push');
let atob = require('atob');
let bodyParser = require('body-parser');
let util = require('util');

let app = express();

let subscribers = [];

let VAPID_SUBJECT = 'mailto:name@name.com';
let VAPID_PUBLIC_KEY =
  'BMlVY3kgdA_t_LdK3vuQTll4uEnsSXFpj857hMmwgd--1YN9a0ge2QNRCoWmmv-xJ24Gk4PiRY2tBhVfJqULF1Y';
let VAPID_PRIVATE_KEY = '9qycWpG_PmBAPgtMsFj80XEMFFWiaV8ka_TSJSBXbOA';

//Auth secret used to authentication notification requests.
let AUTH_SECRET = 'ALL';

if (!VAPID_SUBJECT) {
  return console.error('VAPID_SUBJECT environment variable not found.');
} else if (!VAPID_PUBLIC_KEY) {
  return console.error('VAPID_PUBLIC_KEY environment variable not found.');
} else if (!VAPID_PRIVATE_KEY) {
  return console.error('VAPID_PRIVATE_KEY environment variable not found.');
} else if (!AUTH_SECRET) {
  return console.error('AUTH_SECRET environment variable not found.');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

webPush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

app.use(express.static('static'));

app.get('/status', function(req, res) {
  res.send('Server Running!');
});

app.post('/notify', function(req, res) {
  let authSecret = req.get('auth-secret');
  if (authSecret !== '') {
    let subscribersList =
      req.get('auth-secret') === AUTH_SECRET
        ? subscribers
        : subscribers.filter(subscriber => subscriber.name === authSecret);
    let message = req.query.message || `Follow gioboa on GitHub :-)`;
    let clickTarget = req.query.clickTarget || `https://github.com/gioboa`;
    let title = req.query.title || `gioboa GitHub`;

    subscribers.forEach(subscriber => {
      let payload = JSON.stringify({
        message: message,
        clickTarget: clickTarget,
        title: title
      });
      webPush
        .sendNotification(subscriber.pushSubscription, payload, {})
        .then(response => {
          // console.log('OK');
          // console.log("Status : "+util.inspect(response.statusCode));
          // console.log("Headers : "+JSON.stringify(response.headers));
          // console.log("Body : "+JSON.stringify(response.body));
        })
        .catch(error => {
          console.log('ERROR');
          // console.log("Status : "+util.inspect(error.statusCode));
          // console.log("Headers : "+JSON.stringify(error.headers));
          // console.log("Body : "+JSON.stringify(error.body));
        });
    });
    res.send(JSON.parse('{"message": "Notification send!"}'));
  } else {
    res.send(JSON.parse('{"message": "Notification Ok"}'));
  }
});

app.post('/list', function(req, res) {
  let authSecret = req.get('auth-secret');
  if (authSecret === AUTH_SECRET) {
    subscribers.forEach((pushSubscription, index) =>
      console.log(`${index} - ${pushSubscription.name}`)
    );
  }
  res.send(JSON.parse('{"message": "List ok!"}'));
});

app.post('/subscribe', function(req, res) {
  let subscription = req.body['subscription'];
  let pushSubscription = {
    endpoint: subscription['endpoint'],
    keys: subscription['keys']
  };
  subscribers.push({ name: req.body['name'], pushSubscription });
  res.send(JSON.parse('{"message": "Subscription accepted!"}'));
});

app.post('/unsubscribe', function(req, res) {
  let subscription = req.body['subscription'];
  subscribers = subscribers.filter(
    subscriber =>
      subscription['endpoint'] == subscriber.pushSubscription.endpoint
  );
  res.send(JSON.parse('{"message": "Subscription removed!"}'));
});

let PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`push_server listening on port ${PORT}!`);
});
