import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { readAllContacts } from '../utils/readAllContacts.js';

export const thanos = async () => {
  try {
    const existingContacts = await readAllContacts();
    const filteredContacts = existingContacts.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};

await thanos();
