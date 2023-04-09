require('dotenv').config();
const http = require('http');
const db = require('./database');

const { sendResponse } = require("./helpers/response");
const ridesRoutes = require('./routes/ride');
const personRoutes = require('./routes/person');
const ticketRoutes = require('./routes/ticket');

const getHandlers = {
  '/ride/all': (req, res) => ridesRoutes.getAllRides(req, res),
  '/ride/a': (req, res) => ridesRoutes.getZoneRides(req, res, 'a'),
  '/ride/b': (req, res) => ridesRoutes.getZoneRides(req, res, 'b'),
  '/ride/c': (req, res) => ridesRoutes.getZoneRides(req, res, 'c'),
  '/ride/d': (req, res) => ridesRoutes.getZoneRides(req, res, 'd'),
  '/ticket/owned': (req, res) => ticketRoutes.getTicketCustomer(req, res),
  '/ticket/ride/': (req, res) => ticketRoutes.getTicketRides(req, res)
}

const putHandlers = {

}

const postHandlers = {
  '/register': (req, res) => personRoutes.postPerson(req, res),
  '/login': (req, res) => personRoutes.postLogin(req, res),
  '/ride/buy': (req, res) => ticketRoutes.postTicket(req, res)
}

const deleteHandlers = {
  '/ticket/remove': (req, res) => ticketRoutes.deleteTicket(req, res)
}

const server = http.createServer(async (req, res) => {
  const getHandler = getHandlers[req.url];
  const putHandler = putHandlers[req.url];
  const postHandler = postHandlers[req.url];
  const deleteHandler = deleteHandlers[req.url];
  
  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (getHandler && req.method === 'GET') {
    getHandler(req, res)
  } else if (putHandler && req.method === 'PUT') {
    putHandler(req, res)
  } else if (postHandler && req.method === 'POST') {
    postHandler(req, res)
  } else if (deleteHandler && req.method === 'DELETE') {
    deleteHandler(req, res)
  } else {
    sendResponse(req, res, 404, "Page not found")
  }
});

const PORT = 8080;

server.listen(PORT, () => console.log("Server running on port:", PORT));