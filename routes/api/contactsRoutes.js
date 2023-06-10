const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers/contactsControler');
const { isValidId, authenticate } = require('../../middlewares');

const { validateBody, validateStatusBody } = require('../../decorators');
const { contactsSchema, updateFavoriteSchema } = require('../../schemas');

router.use(authenticate);

router.get('/', getAllContacts);

router.get('/:contactId', isValidId, getById);

router.post('/', validateBody(contactsSchema), addContact);

router.delete('/:contactId', isValidId, removeContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(contactsSchema),
  updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateStatusBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
