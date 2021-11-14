# live-html-validator (Live HTML Validator)

![Live HTML Validator](https://raw.githubusercontent.com/Yuriy-Svetlov/live-html-validator/main/images/on_128x128_v1.png)

This module is for the browser plugin «[Live HTML Validator](https://live-html-validator.com)» — this is the browser plugin for real-time HTML validation of the browser page during web development.

[live-html-validator.com](https://live-html-validator.com/)

You may also want to use: 
* [live-reload-browser-page](https://live-reload-browser-page.com/)
* [live-alert-browser-page](https://live-alert-browser-page.com/)

![Live HTML Validator](https://raw.githubusercontent.com/Yuriy-Svetlov/live-html-validator/main/images/main.png)



## Installs

**Step - 1** 

You need to install the browser plugin [Live HTML Validator](https://live-html-validator.com/) if you have not already installed it for:
  * [Google Chrome](https://chrome.google.com/webstore/detail/live-html-validator/hojcgkcomonibjdgfohcginmooigkjdg)
  
**Step - 2**
```shell
npm i live-html-validator --save-dev
```

##  How to use

[Example of how to establish a connection to the plugin «**Live HTML Validator**»](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/%D1%81onnect_to_server)

```javascript
const 
  htmlValidator = require("live-html-validator");

const
  htmlValidatorMain = new htmlValidator({
    host: '127.0.0.1',
    port: '8080'
  });

// Run Server
htmlValidatorMain.run();

setTimeout(function(){
  // Validating HTML in your web page
  htmlValidatorMain.check();
}, 5000);
```

##  Examples:

* [NodeJs](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/nodejs/1) (To better understand how to use this tool, it is recommended that you get started.)
* [Gulp](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/gulp)
* [Webpack](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/webpack)
* [Grunt](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/grunt)


##  API

### Instance options

`const htmlValidatorMain = new htmlValidator({options});`

#### options.host
* Type: `String`
* Default value: `127.0.0.1`

#### options.port
* Type: `String|Integer`
* Default value: `8080`

#### options.debug
* Type: `boolean`
* Default value: `false`

Prints additional data to the console

#### options.ssl
* Type: `ObjectJSON`
* Default value: `undefined`

To connect via SSL connection.

[options SSL](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options)

```js
ssl: { 
  enable: true,
    options: { 
      key: './ssl/my.key',
      cert: './ssl/my.crt'  
  }               
}
```

### Methods

#### htmlValidatorMain.run()
Running the server

#### htmlValidatorMain.check()
Validating an HTML web page

###  Browser plugin API

[API of browser plugin **Live HTML Validator**](https://live-html-validator.com/documentation)