require('dotenv').config();
const http = require('http');
const db = require('./database');

const errorMessage = require('./routes/response');
const ridesRoutes = require('./routes/ride'); 
const personRoutes = require('./routes/person');

const getHandlers = {
  '/ride/all': (req, res) => ridesRoutes.getAllRides(req, res),
  '/ride/a': (req, res) => ridesRoutes.getZoneRides(req, res, 'a'),
  '/ride/b': (req, res) => ridesRoutes.getZoneRides(req, res, 'b'),
  '/ride/c': (req, res) => ridesRoutes.getZoneRides(req, res, 'c'),
  '/ride/d': (req, res) => ridesRoutes.getZoneRides(req, res, 'd'),
}

const putHandlers = {

}

const postHandlers = {
  '/register': (req, res) => personRoutes.postPerson(req, res),
  '/login': (req, res) => personRoutes.postLogin(req, res)
}

const deleteHandlers = {

}

const server = http.createServer(async (req, res) => {
  const getHandler = getHandlers[req.url];
  const putHandler = putHandlers[req.url];
  const postHandler = postHandlers[req.url];
  const deleteHandler = deleteHandlers[req.url];


  if(getHandler && req.method === 'GET'){
    getHandler(req, res)
  } else if (putHandler && req.method === 'PUT') {
    putHandler(req, res)
  } else if (postHandler && req.method === 'POST') {
    postHandler(req, res)
  } else if (deleteHandler && req.method === 'DELETE') {
    deleteHandler(req, res)
  }  else {
    errorMessage.sendError(req, res, 404, "Page not found")
  }
});

const PORT = 8080;

server.listen(PORT, () => console.log("Server running on port:", PORT));