import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    console.log(error);
  }
};
