import { combineReducers } from 'redux';
import {
  addSuccess,
  addRequest,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
  filter,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [fetchSuccess]: (state, { payload }) => payload,
  [addSuccess]: (state, { payload }) => [...state, payload],
  [deleteSuccess]: (state, { payload }) =>
    state.filter(({ contactId }) => contactId !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const contactFilter = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

// const contactFilter = (state = '', { type, payload }) => {
//   switch (type) {
//     case [filter]:
//       return payload;
//     default:
//       return state;
//   }
// };

const loading = createReducer(false, {
  [fetchSuccess]: () => false,
  [fetchRequest]: () => true,
  [fetchError]: () => false,
  [addSuccess]: () => false,
  [addRequest]: () => true,
  [addError]: () => false,
  [deleteSuccess]: () => false,
  [deleteRequest]: () => true,
  [deleteError]: () => false,
});

export default combineReducers({
  items,
  contactFilter,
  loading,
});
