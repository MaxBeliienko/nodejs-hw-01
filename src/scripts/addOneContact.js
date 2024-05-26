import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readAllContacts } from '../utils/readAllContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readAllContacts();
    const newContact = createFakeContact();
    const dataToAppend = [...existingContacts, newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(dataToAppend, null, 2), 'utf8');
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
