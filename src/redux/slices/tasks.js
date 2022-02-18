import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
    },
    removeTask: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const prevTaskIndex = state.taskList.findIndex((task) => task.id === action.payload.id);
      state.taskList.splice(prevTaskIndex, 1, action.payload);
    }
  }
});

export const { addTask, removeTask, updateTask } = tasks.actions;

export default tasks.reducer;
