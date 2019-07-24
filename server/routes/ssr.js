const express = require(  "express");
const App = require(  "../../client/src/App");
const React= require ("react");
const { renderToString } =require ("react-dom/server");
var fs = require('fs');
var path = require('path');
var { BUILD_DIR } = require('./paths');


//const hbs =require ("handlebars");

//const router = express.Router();

function reactRenderer(req, res) {
    var app = renderToString(React.createElement(App));
    var html = fs
      .readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8')
      .replace('__ROOT__', app);
    return res.send(html);
  }



// router.get("/", async (req, res) => {

//     const theHtml = `
//     <html>
//     <head><title>SSR</title></head>
//     <body>
//     <h1>My  Server Side Render</h1>
//     <div id="reactele">Server Side Rendering</div>
//     <script src="/app.js" charset="utf-8"></script>
//     <script src="/vendor.js" charset="utf-8"></script>
//     </body>
//     </html>
//     `;

//     const hbsTemplate = hbs.compile(theHtml);
//     ///const reactComp = renderToString(React.createElement(App ));
//     //console.log(reactComp)
//     //const htmlToSend = hbsTemplate({ reactele: reactComp });
//     res.send(theHtml);
// });
module.exports =  reactRenderer;