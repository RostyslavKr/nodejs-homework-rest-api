const express = require('express');

const {
  register,
  login,
  getCurrent,
  logout,
  avatarUpload,
} = require('../../controllers/authControllers');

const { authenticate, upload } = require('../../middlewares');

const { userRegisterSchema, userLoginSchema } = require('../../schemas');

const { validateBody } = require('../../decorators');
const jsonParser = express.json();
const router = express.Router();

// signup
router.post(
  '/register',
  jsonParser,
  validateBody(userRegisterSchema),
  register
);

// signin
router.post('/login', jsonParser, validateBody(userLoginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', jsonParser, authenticate, logout);

// update avatar
router.patch('/avatars', upload.single('avatar'), authenticate, avatarUpload);

module.exports = router;
