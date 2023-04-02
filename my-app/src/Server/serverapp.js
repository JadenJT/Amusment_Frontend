require('dotenv').config();
const http = require('http');
const db = require('./database');

const ridesRoutes = require('./routes/ride') 

const getHandlers = {
  '/ride/all': (req, res) => ridesRoutes.getAllRides(req, res),
  '/ride/a': (req, res) => ridesRoutes.getZoneRides(req, res, 'a'),
  '/ride/b': (req, res) => ridesRoutes.getZoneRides(req, res, 'b'),
  '/ride/c': (req, res) => ridesRoutes.getZoneRides(req, res, 'c'),
  '/ride/d': (req, res) => ridesRoutes.getZoneRides(req, res, 'd'),
}

const updateHandlers = {

}

const insertHandlers = {

}

const deleteHandlers = {

}

const server = http.createServer((req, res) => {
  const getHandler = getHandlers[req.url];
  const updateHandler = updateHandlers[req.url];
  const insertHandler = insertHandlers[req.url];
  const deleteHandler = deleteHandlers[req.url];

  if(getHandler && req.method === 'GET'){
    getHandler(req, res)
  } else if (updateHandler && req.method === 'UPDATE') {
    updatehandler(req, res)
  } else if (insertHandler && req.method === 'INSERT') {
    inserthandler(req, res)
  } else if (deleteHandler && req.method === 'DELETE') {
    updatehandler(req, res)
  }  else {
      res.statusCode = 404;-
      res.writeHead(res.statusCode, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({error: res.statusCode, message: "page not found"}));
  }
});

const PORT = 8080;

server.listen(PORT, () => console.log("Server running on port:", PORT));