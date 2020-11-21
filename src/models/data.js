const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: { 
    type: String 
  },
  age: {
    type: Number,
  },
  sex: {
    type: String
  },
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  altitude: {
    type: Number
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
