const Contact = require('./schema/contact');

const getAllContacts = async () => {
  return await Contact.find();
};

const getContactById = async id => {
  return await Contact.findOne({ _id: id });
};

const createContact = async ({ name, email, phone }) => {
  return await Contact.create({ name, email, phone });
};

const updateContactById = async (id, fields) => {
  return await Contact.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeContact = async id => {
  return await Contact.findByIdAndRemove({ _id: id });
};
const updateStatusContact = async (id, body) => {
  return await Contact.findByIdAndUpdate({ _id: id }, body, { new: true });
};
module.exports = {
  getAllContacts,
  getContactById,
  removeContact,
  createContact,
  updateContactById,
  updateStatusContact,
};
