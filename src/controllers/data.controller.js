const { Types } = require('mongoose');
const debugLib = require('debug');
const Data = require('../models/data');

const debug = debugLib('tracer:data-controller');

const create = async (req, res) => {
  const { body } = req;
  debug(body);
  body.originalId = body.id;
  delete body.id;
  
  debug(body);

  const data = new Data({
    ...body
  });
  debug('GOOO...');
  debug(data);
  await data.save();
  debug(`data saved : ${data}`);

  res.status(201).json(data);
} 

const all = async (req, res) => {
  debug('Get all data');
  res.status(201).json([]);
}

module.exports = {
  create,
  all
}
