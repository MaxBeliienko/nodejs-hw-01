import { readAllContacts } from '../utils/readAllContacts.js';

export const countContacts = async () => {
  try {
    const existingContacts = await readAllContacts();
    return existingContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
