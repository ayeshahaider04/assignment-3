// Load the values from the .env
require('dotenv').config();
// export MongoDB connection string so other files can use 
module.exports = { URI: process.env.MONGODB_URI };