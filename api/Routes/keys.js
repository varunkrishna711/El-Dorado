const dotenv = require('dotenv');
dotenv.config();


module.exports={
    razorIdkey : process.env.key_id,
    razorIdSecret: process.env.key_secret
}