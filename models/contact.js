const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { handleMongooseError } = require('../helpers');

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

    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);
contact.post('save', handleMongooseError);
const Contact = mongoose.model('contact', contact);
module.exports = Contact;
