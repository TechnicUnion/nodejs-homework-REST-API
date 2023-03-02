const express = require('express')

const router = express.Router()

const ctrl = require('../../controllers/contacts')

const { validateBody } = require('../../middlewares');

const schemas = require('../../schemas/contacts')

router.get('/', ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post('/', validateBody(schemas.addSchemaPost), ctrl.addContact);

router.delete('/:id', ctrl.removeContact);

router.put('/:id',validateBody(schemas.addSchemaPut), ctrl.updateContact);

module.exports = router
