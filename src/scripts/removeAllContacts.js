import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]');
    console.log('Database cleared successfully');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
