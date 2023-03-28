const http = require('http');
const url = require('url');

// Importing routes
const zone = require('./routes/zone');
const notFound = require('./routes/notFound');

const PORT = 8000;

//create the server
const server = http.createServer(async (req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  path = path.replace(/^\/+|\/+$/g, "");
  console.log(path);
  let qs = parsedURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();

  req.on("data", function() {
    console.log("got some data")
  });
  req.on("end", function() {
    console.log("send a response")
    let route = typeof routes[path] != "undefined" ? routes[path] : routes["notFound"];
    let data = {
      path: path,
      queryString: qs,
      headers: headers,
      method: method
    };
    route(data, res)
  });
});

//Server listening
server.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`)
});

const routes = {
  zone: function (data, res) {
    let payload = zone;
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end('\n');
  },
  notFound: function(data, res) {
    let payload = notFound;
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end('\n');
  }
}