import { createSlice } from '@reduxjs/toolkit';
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],          // Ensure todos is initialized as an array
    addedCount: 0,
    completedCount: 0,
    deletedCount: 0,
  },  reducers: {
    addTodo: (state, action) => {
      state.todos = state.todos || []; // Ensure todos is an array
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
      state.addedCount += 1;
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos || []; // Ensure todos is an array
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        state.completedCount += todo.completed ? 1 : -1;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos || []; // Ensure todos is an array
      const todoToDelete = state.todos.find((todo) => todo.id === action.payload);
      if (todoToDelete) {
        state.deletedCount += 1;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        if (todoToDelete.completed) {
          state.completedCount -= 1;
        }
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
