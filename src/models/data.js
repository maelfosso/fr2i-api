const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: { 
    type: String 
  },
  age: {
    type: Number,
  },
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
  altitude: {
    type: String
  },
  originalId: {
    type: Number
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

const Data = mongoose.model('Data', schema);
module.exports = Data;
