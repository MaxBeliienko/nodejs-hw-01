import { readAllContacts } from '../utils/readAllContacts.js';

export const getAllContacts = async () => {
  try {
    return await readAllContacts();
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
