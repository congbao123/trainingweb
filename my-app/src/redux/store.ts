// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice'; // Sẽ tạo ở bước sau

export const store = configureStore({
  reducer: {
    news: newsReducer, // Reducer cho phần tin tức
  },
});

// Type cho RootState và AppDispatch (dùng để type-safe trong component)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;