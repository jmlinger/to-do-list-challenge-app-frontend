import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload]
    }
  }
});

export const { addTask } = tasks.actions;

export default tasks.reducer;
