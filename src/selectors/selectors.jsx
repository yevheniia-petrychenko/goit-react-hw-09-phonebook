import { createSelector } from '@reduxjs/toolkit';

const getIsLoading = state => {
  // console.log(state);
  return state.contacts.loading;
};
const getFilter = state => state.contacts.contactFilter;

const getAllContacts = state => state.contacts.items;

const getVisibleContact = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getIsLoading, getFilter, getVisibleContact };
