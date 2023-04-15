const { sendResponse } = require("../helpers/response");
const path = require('path');
const fs = require('fs');

function getRandomName() {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < 13; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }

module.exports = {
    async addImage(req, res) {
        const fileName = getRandomName()
        const rootPath = path.join(__dirname, '../../images/', fileName + '.png')
        const writableStream = fs.createWriteStream(rootPath);

        req.on('data', (chunk) => {
            // Concatenate the chunks of data received
            writableStream.write(chunk);
        });

        req.on('end', () => {
            writableStream.end();
        });
        return sendResponse(req, res, 200, "Image added", `${fileName}.png`)
    }
}