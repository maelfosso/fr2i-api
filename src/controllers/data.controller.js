const { Types } = require('mongoose');
const debugLib = require('debug');
const Data = require('../models/data');

const debug = debugLib('tracer:data-controller');

const create = async (req, res) => {
  const { body } = req;

  body.originalId = body.id;
  delete body.id;
  
  debug(body);

  const data = new Data({
    ...body
  });
  debug(data);
  await data.save();
  debug(`data saved : ${data}`);

  req.app.io.emit('data.saved', data);

  res.status(201).json(data);
} 

const all = async (req, res) => {
  debug('Get all data');
  let success = true;
  let data = [];

  try {
    data = await Data.find();
  } catch (e) {
    debug('An error occurred');
    debug(e);

    success = false;
  }

  res.status(success ? 201 : 403).json({
    data: []
  });
}

module.exports = {
  create,
  all
}
