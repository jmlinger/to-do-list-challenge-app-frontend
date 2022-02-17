import { configureStore } from '@reduxjs/toolkit'
import tasks from './slices/tasks';

export default configureStore({
  reducer: { counter: tasks },
});
