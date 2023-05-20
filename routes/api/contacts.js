const express = require('express');
const router = express.Router();
const {
  listContact,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateFavoriteById,
} = require('..//..//controllers/contactsControler');

const { validateBody, validateStatusBody } = require('..//../decorators');
const { contactsSchema, updateFavoriteSchema } = require('..//..//schemas');

router.get('/', listContact);

router.get('/:contactId', getById);

router.post('/', validateBody(contactsSchema), addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', validateBody(contactsSchema), updateContact);

router.patch(
  '/:contactId',
  validateStatusBody(updateFavoriteSchema),
  updateFavoriteById
);

module.exports = router;
