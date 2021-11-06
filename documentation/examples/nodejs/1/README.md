# Example - 1 (NodeJs) (live-html-validator)

**1.** Download or copy [example-1](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/nodejs/1)

**2.** Go to the directory with `index.html` and place all files in the root directory of your web server.


Run the command in console: 

```shell
npm install
```

**3.** Double-clisk on **start.bat** or run in console 

```shell
node index.js
```
In the console you should see the following message:

> Server started | host: 127.0.0.1 | port: 8080


**4.** 
Open your browser: http://localhost:3000


**5.** Set up a connection with the plugin. [Example of how to establish a connection to a plugin](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/%D1%81onnect_to_server)

**6.** Change the file `index.html` (make a syntax error).

**Congratulation!**

You should hear a sound and see a visual notifications of an invalid HTML validation of the page.
