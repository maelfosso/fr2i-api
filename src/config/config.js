const path = require('path');
const debugLib = require('debug');

const debug = debugLib('tracer:config')

debug(process.env.NODE_ENV);
const environmentConfig = require(path.join(__dirname, `/env/${process.env.NODE_ENV}`));
debug(environmentConfig);

const config = { 
  ...environmentConfig 
}

module.exports = config;
