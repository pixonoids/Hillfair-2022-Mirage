import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import uiReducer from './ui';

export default configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
  },
});
