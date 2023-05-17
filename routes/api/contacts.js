const express = require('express');

const {
  listContact,
  getById,
  addContact,
  removeContact,
  updateContact,
} = require('..//../controllers');

const { validateBody } = require('..//../decorators');
const { contactsSchema } = require('..//..//schemas');

const router = express.Router();

router.get('/', listContact);

router.get('/:contactId', getById);

router.post('/', validateBody(contactsSchema), addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', validateBody(contactsSchema), updateContact);

module.exports = router;
