import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isLogged: boolean;
  error: string | null;
}

/**
 * Etat initial qui dit que par défaut, l'utilisateur n'est pas connecté
 */
const initialState: AuthState = {
  token: null,
  isLogged: false,
  error: null,
};

/**
 * Un slice : agit comme un "tiroir" du store global, réservé à une feature
 *
 * On y trouve :
 * - l'état initial
 * - les reducers : fonctions qui modifient l'état du slice
 * - les actions : fonctions qui appellent les reducers
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isLogged = true;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.token = null;
      state.isLogged = false;
    },
    logout(state) {
      state.token = null;
      state.isLogged = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
