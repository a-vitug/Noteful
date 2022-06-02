const mongoose = require('mongoose');
// 'mongodb+srv://noteful-app:notefulclone123@noteful-app.fthcj.mongodb.net/test'
mongoose.connect( 
    process.env.MONGO_URI || 'mongodb://localhost/noteFullDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);


module.exports = mongoose.connection;