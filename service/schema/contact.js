const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { handleMongooseError } = require('..//..//helpers');

const contact = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
contact.post('save', handleMongooseError);
const Contact = mongoose.model('contact', contact);
module.exports = Contact;
