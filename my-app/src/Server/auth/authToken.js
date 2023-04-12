const jwt = require('jsonwebtoken');
require("dotenv").config();


async function generateToken(payloadInfo) {
    var payload = {
        email: payloadInfo.email,
        fname: payloadInfo.fname,
    };
    return jwt.sign(payload, process.env.SECRETKEY, {})
}

module.exports = {
    generateToken
};