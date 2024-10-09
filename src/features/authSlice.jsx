import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  user: null, // Initial state with no user
};

// Create auth slice
const authSlice = createSlice({
  name: "auth", // Slice name
  initialState, // Initial state
  reducers: {
    // Action to set user
    setUser: (state, { payload }) => {
      state.user = payload; // Set user with payload (user object)
    },
    // Action to clear user
    clearUser: (state) => {
      state.user = null; // Reset user to null
    },
  },
});

// Export actions (setUser and clearUser)
export const { setUser, clearUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
