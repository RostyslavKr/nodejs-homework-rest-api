const express = require('express');

const {
  listContact,
  getById,
  addContact,
  removeContact,
  updateContact,
} = require('../../helpers');

const router = express.Router();

router.get('/', listContact);

router.get('/:contactId', getById);

router.post('/', addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', updateContact);

module.exports = router;
