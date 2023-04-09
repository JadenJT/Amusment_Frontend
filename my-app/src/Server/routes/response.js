module.exports = {
    sendResponse(req, res, errorCode, message, item=null){
        res.statusCode = errorCode;
        res.writeHead(res.statusCode, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({error: res.statusCode, message: message, item: item}));
        return;
    }
}