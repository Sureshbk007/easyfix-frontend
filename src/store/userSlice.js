import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/api";

// Thunks for async actions (login, register, etc.)
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Something went wrong"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData) => {
    try {
      const response = await API.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Something went wrong"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userInfo = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userInfo = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
