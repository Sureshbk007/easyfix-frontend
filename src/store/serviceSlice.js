import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/api";

// Thunks for fetching services and adding services
export const fetchServices = createAsyncThunk("services/fetch", async () => {
  const response = await API.get("/service");
  return response.data;
});

export const addService = createAsyncThunk(
  "services/add",
  async (serviceData) => {
    const response = await API.post("/service", serviceData);
    return response.data;
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    servicesList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.servicesList = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
