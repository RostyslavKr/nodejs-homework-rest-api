const Contact = require('../models/contact');
const HttpError = require('../helpers/HttpError');
const { ctrlWrapper } = require('../decorators');

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { favorite } = req.query;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  if (favorite) {
    if (favorite !== 'true' && favorite !== 'false') {
      throw HttpError(404, 'Favorite value can only be true or false');
    }
    const result = await Contact.find(
      { owner, favorite },
      'name email phone favorite',
      { skip, limit }
    ).populate('owner', 'email subscription');
    res.json(result);
  } else {
    const result = await Contact.find({ owner }, 'name email phone favorite', {
      skip,
      limit,
    }).populate('owner', 'email subscription');
    res.json(result);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
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
    const { _id: owner } = req.user;
    const result = await Contact.create({ ...req.body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, {
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
const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404);
    }
    res.json({ message: 'contact deleted' });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
