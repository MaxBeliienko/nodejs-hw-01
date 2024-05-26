import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readAllContacts } from '../utils/readAllContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readAllContacts();
    let addArray = [];
    for (let index = 0; index < number; index++) {
      const contact = createFakeContact();
      addArray.push(contact);
    }
    const dataToAppend = [...existingContacts, ...addArray];
    await fs.writeFile(PATH_DB, JSON.stringify(dataToAppend, null, 2), 'utf8');
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
