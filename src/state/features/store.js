import { configureStore } from '@reduxjs/toolkit';
import sectionRefsSliceReducer from './slices/sectionRefsSlice';

const store = configureStore({
  reducer: {
    activeSection: sectionRefsSliceReducer,
  },
});

export default store;


