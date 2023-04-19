require('dotenv').config();
const http = require('http');

const { sendResponse } = require("./helpers/response");
const imageRoutes = require('./routes/image');
const personRoutes = require('./routes/person');
const ticketRoutes = require('./routes/ticket');
const employeeRoutes = require('./routes/employee');
const maintenanceRoutes = require('./routes/maintenance');
const concessionRoutes = require('./routes/concession');
const ride = require('./routes/ride');


// All GET request
const getHandlers = {
  '/ticket/owned': (req, res) => ticketRoutes.ticketsOwn(req, res),
  '/ticket/report': (req, res) => ticketRoutes.ticketReport(req, res),
  '/employee/report': (req, res) => employeeRoutes.employeeReport(req, res),
  '/maintenance/report': (req, res) => maintenanceRoutes.maintenanceReport(req, res),
  '/image/add': (req, res) => imageRoutes.addImage(req, res)
}

// All PUT request
const putHandlers = {
  '/employee/update': (req, res) => employeeRoutes.updateEmployee(req, res)
}

// All POST request
const postHandlers = {
  '/register': (req, res) => personRoutes.register(req, res),
  '/login': (req, res) => personRoutes.login(req, res),
  '/ticket/buy': (req, res) => ticketRoutes.buyTicket(req, res),
  '/employee/add': (req, res) => employeeRoutes.addEmployee(req, res),
  '/concession/add': (req, res) => concessionRoutes.addConcession(req, res),
  '/concession/exist': (req, res) => concessionRoutes.concessionExist(req, res),
  '/ride/add': (req, res) => ride.addRide(req, res),
  '/ride/exist': (req, res) => ride.rideExist(req, res)
}

// All DELETE request
const deleteHandlers = {
  '/ticket/remove': (req, res) => ticketRoutes.removeTicket(req, res),
  '/employee/remove': (req, res) => employeeRoutes.removeEmployee(req, res)
}

const server = http.createServer(async (req, res) => {
  const getHandler = getHandlers[req.url];
  const putHandler = putHandlers[req.url];
  const postHandler = postHandlers[req.url];
  const deleteHandler = deleteHandlers[req.url];
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.writeHead(204);
    res.end();
    return;
  }



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