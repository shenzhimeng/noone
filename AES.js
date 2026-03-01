const crypto = require("crypto")

const algorithm = "AES-128-CBC"
const key = Buffer.from("", "hex")
const iv = Buffer.from("", "hex")

function encrypt(data) {
    var cipher = crypto.createCipheriv(algorithm, key, iv);
    var cData = cipher.update(data, 'utf8', 'binary');
    cData += cipher.final('binary');
    cData = Buffer.from(cData, 'binary').toString('base64');
    return cData;
};

function decrypt(cData) {
    cData = Buffer.from(cData, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decoded = decipher.update(cData, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};

module.exports.encrypt = encrypt
module.exports.decrypt = decrypt
