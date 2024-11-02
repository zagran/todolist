export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState) {
      const parsedState = JSON.parse(serializedState);
      console.log("parsedState", parsedState);
      return {
        todos: parsedState.todos || [],
        addedCount: parsedState.addedCount || 0,
        completedCount: parsedState.completedCount || 0,
        deletedCount: parsedState.deletedCount || 0,
      };
    }
    return undefined;
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};