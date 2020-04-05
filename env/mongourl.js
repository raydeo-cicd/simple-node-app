const env = require('dotenv').config();
const mongourl = process.env.MONGO_URL || 'mongodb://localhost:27017';

module.exports = (mongourl);