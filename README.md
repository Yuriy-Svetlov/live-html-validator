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
  * [Google Chrome](#)
  * Firefox (not yet available)
  
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
  htmlValidatorMain.check();
}, 5000);
```

##  Examples:

* [NodeJs](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/nodejs/1) (To better understand how to use this tool, it is recommended that you get started.)
* [Gulp](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/gulp)
* [Webpack](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/webpack)
* [Grunt](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/grunt)
