require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
    .on('open', () => console.log('Ready to go!'))
    .on('close', () => console.log('Connection closed.'))
    .on('error', (e) => console.log("error:", e))
module.exports = mongoose