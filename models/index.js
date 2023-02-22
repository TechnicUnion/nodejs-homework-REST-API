const fs = require('fs/promises')
const path = require('path')
const { randomUUID } = require("crypto");

const contactsPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
    const list = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(list);
}

async function getContactById(contactId) {
  const list = await listContacts();
  const result = list.find(item => item.id === contactId);
    return result || null;
}

async function removeContact(contactId) {
  const contactsList = await listContacts();
  const index = contactsList.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contactsList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2), "utf8");
  return result;
}

async function addContact(body) {
  const newContact = {
        id: randomUUID(),
        ...body,
    }
  const contactsList = await listContacts();
  contactsList.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2), "utf8")
  return newContact;
}

async function updateContact(contactId, body) {
  const contactsList = await listContacts();
  const index = contactsList.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  contactsList[index] = { contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2), "utf8");
  return contactsList[index];
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact
}