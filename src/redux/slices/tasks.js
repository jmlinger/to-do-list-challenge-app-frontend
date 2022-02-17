import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload]
    },
    removeTask: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload)
    }
  }
});

export const { addTask, removeTask } = tasks.actions;

export default tasks.reducer;
