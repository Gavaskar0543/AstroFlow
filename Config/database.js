const mongoose = require('mongoose');

mongoose.connect(process.env.DB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;