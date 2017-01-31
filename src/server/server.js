import di from './container';

const path = require('path');
require("babel-core/register");
require("babel-polyfill");
const express = require('express');
const app = express();
const monitor = di.container.get('monitor');

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(function (req, res, next) {
  monitor.registerIncomingRequest(req.url, req.param, Date.now());
  console.log(monitor.getStatistic().totalIncomingRequests);
  next()
})

app.use('/', express.static(path.join(__dirname, process.env.PUBLIC_DIR)))

app.get('/stats', (req, res) => {
	const requestStats = monitor.getStatistic();
    return res.send(Object.assign({}, requestStats));
})

app.listen(8080, function () {
    console.log('Server listening on port 8080!')
})
