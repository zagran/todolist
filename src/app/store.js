import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import { loadState, saveState } from '../utils/localStorage';

const preloadedState = {
  todos: loadState() || {
    todos: [], // Default todos to an empty array
    addedCount: 0,
    completedCount: 0,
    deletedCount: 0,
  },
};
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

// Subscribe to store updates to save the state to localStorage
store.subscribe(() => {
  saveState(store.getState().todos);
});

export default store;
