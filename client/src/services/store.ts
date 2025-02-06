import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

/**
 * Store global : permet de gérer les states de l'application
 * dans un seul endroit, réutilisable partout
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
