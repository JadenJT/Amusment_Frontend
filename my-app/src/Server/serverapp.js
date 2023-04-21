require('dotenv').config();
const http = require('http');

const { sendResponse } = require("./helpers/response");
const giftshopRoutes = require('./routes/giftshop');
const personRoutes = require('./routes/person');
const ticketRoutes = require('./routes/ticket');
const employeeRoutes = require('./routes/employee');
const maintenanceRoutes = require('./routes/maintenance');
const concessionRoutes = require('./routes/concession');
const incidentRoutes = require('./routes/incident');
const jobRoutes = require('./routes/job');
const rideRoutes = require('./routes/ride');


// All GET request
const getHandlers = {
  '/ticket/owned': (req, res) => ticketRoutes.ticketsOwn(req, res),
  '/ticket/report': (req, res) => ticketRoutes.ticketReport(req, res),
  '/employee/report': (req, res) => employeeRoutes.employeeReport(req, res),
  '/maintenance/report': (req, res) => maintenanceRoutes.maintenanceReport(req, res),
  '/incident/get': (req, res) => incidentRoutes.getIncident(req, res),
  '/job/get': (req, res) => jobRoutes.getJob(req, res),
  '/giftshop/exist': (req, res) => giftshopRoutes.giftshopExist(req, res),
  '/concession/exist': (req, res) => concessionRoutes.concessionExist(req, res),
  '/ride/exist': (req, res) => rideRoutes.rideExist(req, res),
  '/test': (req, res) => concessionRoutes.getConcession(req, res),
  '/ride/adult': (req, res) => rideRoutes.getAllAdultRides(req, res),
  '/ride/child': (req, res) => rideRoutes.getAllKidsRides(req, res),
  '/ride/adultActive': (req, res) => rideRoutes.getAllActiveAdultRides(req, res),
  '/ride/childActive': (req, res) => rideRoutes.getAllActiveKidsRides(req, res),
  '/ride/all': (req, res) => rideRoutes.getAllRides(req, res),
  '/concession/all': (req, res) => concessionRoutes.getConcession(req, res),
  '/giftshop/all': (req, res) => giftshopRoutes.getGiftshop(req, res),
  '/zone/all': (req, res) => rideRoutes.getZones(req, res)
}

// All POST request
const postHandlers = {
  '/register': (req, res) => personRoutes.register(req, res),
  '/login': (req, res) => personRoutes.login(req, res),
  '/image/add': (req, res) => imageRoutes.addImage(req, res),
  '/ticket/buy': (req, res) => ticketRoutes.buyTicket(req, res),
  '/employee/add': (req, res) => employeeRoutes.addEmployee(req, res),
  '/concession/add': (req, res) => concessionRoutes.addConcession(req, res),
  '/ride/add': (req, res) => rideRoutes.addRide(req, res),
  '/giftshop/add': (req, res) => giftshopRoutes.addGiftshop(req, res),
  '/incident/add': (req, res) => incidentRoutes.addIncident(req, res),
  '/job/add': (req, res) => jobRoutes.addJob(req, res),
  '/employee/update': (req, res) => employeeRoutes.updateEmployee(req, res),
  '/job/complete': (req, res) => jobRoutes.markJobdone(req, res),
  '/ticket/remove': (req, res) => ticketRoutes.removeTicket(req, res),
  '/employee/remove': (req, res) => employeeRoutes.removeEmployee(req, res)
}

const server = http.createServer(async (req, res) => {
  searchURL = req.url.split('?')[0]
  const getHandler = getHandlers[searchURL];
  const postHandler = postHandlers[searchURL];
  const deleteHandler = deleteHandlers[searchURL];
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