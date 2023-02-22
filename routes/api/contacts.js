const express = require('express')

const router = express.Router()

const contacts = require('../../models')

router.get('/', async (req, res) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  }
  catch (error) {
    res.status(500).json({
      message: "Server error"
    })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await contacts.getContactById(id);
    res.json(result);
  }
  catch (error) {
    res.status(404).json({
      message: "Not found"
    })
  }
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
