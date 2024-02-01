interface Contact {
  name: string;
  phone: string;
  email: string;
}

function searchContacts(query: string, contacts: Contact[]): Contact[] {
  query = query.toLowerCase();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query) ||
      contact.phone.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query)
  );
}

// Example usage:
const contacts: Contact[] = [
  { name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
  { name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com" },
  // ... add more contacts
];

const searchResult = searchContacts("john", contacts);
console.log(searchResult);
