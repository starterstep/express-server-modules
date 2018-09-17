var es = require('express-server');

module.exports = function() {
    var config = es.config;

    var mongoose = es.db.mongoose = require('mongoose');

    mongoose.connect(config.server.dbUri, {
        useMongoClient: true,
        keepAlive: 300000,
        connectTimeoutMS: 30000
    });

    return mongoose;
};