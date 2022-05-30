const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost/notefulDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);


module.exports = mongoose.connection;