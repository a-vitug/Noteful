const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  //TODO: Need to do mongo
  process.env.MONGODB_URI || 'mongodb://localhost:27017/usersDB';


let uri = 'mongodb+srv://mongodb:atlaspass@socialmedia.l9xbo.mongodb.net/db1?retryWrites=true&w=majority'
let mongoose = require('mongoose')
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
