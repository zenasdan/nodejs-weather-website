const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  ws_key: process.env.WEATHERSTACK_ACCESSKEY,
  ps_key: process.env.POSITIONSTACK_ACCESSKEY,
  port: process.env.PORT
};