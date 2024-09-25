import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import serviceReducer from "./serviceSlice";

const preloadedState = () => {
  // Check localStorage for user data
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  return {
    user: {
      userInfo: user,
      isLogged: user ? true : false,
      loading: false,
      error: null,
    },
  };
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    services: serviceReducer,
  },
  preloadedState: preloadedState(),
});
