import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('Contacts');
    if (savedContacts !== null) {
       return JSON.parse(savedContacts)
  }
  return initialContacts;
}

const contactsSlice = createSlice({
  name: "contacts",
  iniatialState: getInitialContacts(),
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => action.payload !== contact.id)
    }
  }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;