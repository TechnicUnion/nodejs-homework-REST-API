const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../middlewares');
const schemas = require('../../schemas/contacts')

router.get('/', ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post('/', validateBody(schemas.addSchemaPost), ctrl.addContact);

router.delete('/:id',isValidId, ctrl.removeContact);

router.put('/:id',isValidId, validateBody(schemas.addSchemaPut), ctrl.updateContact);

router.patch('/:id/favorite',isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);


module.exports = router
