const contactService = require('../service/index');
const HttpError = require('../helpers/HttpError');

const listContact = async (req, res, next) => {
  try {
    const result = await contactService.getAllContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.getContactById(contactId);
    if (result === null) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const result = await contactService.createContact({ name, email, phone });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.removeContact(contactId);
    if (!result) {
      throw HttpError(404);
    }
    res.json({ message: 'contact deleted' });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { contactId } = req.params;
    const result = await contactService.updateContactById(contactId, {
      name,
      email,
      phone,
    });
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const updateFavoriteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.updateStatusContact(
      contactId,
      req.body
    );
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  listContact,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateFavoriteById,
};
