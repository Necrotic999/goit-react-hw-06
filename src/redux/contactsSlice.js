import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts.items,
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== payload
      );
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
