'use strict';

const 
  chokidar = require('chokidar'),
  express = require('express'),
  liveHTMLValidator = require("live-html-validator");

const
  dest = './index.html',
  htmlValidator = new liveHTMLValidator({
    host: '127.0.0.1',
	  port: '8080'
  });

const app = express();
const port = 3000;
const host = 'localhost';

// Run Server
htmlValidator.run();

chokidar.watch(dest).on('change', (path) => {
  console.log('file changed');

  htmlValidator.check();
});


app.get('/', function (req, res) {

  res.sendFile('./index.html', {root: __dirname })
});


app.listen(port, host, () => console.log(`host: ${host}  port: ${port}`))