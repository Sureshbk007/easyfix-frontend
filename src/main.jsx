import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Category,
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  PageNotFound,
  Register,
  Search,
  ServiceDetail,
  ServiceProviderRegister,
} from "./Pages/index.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/service-register" element={<ServiceProviderRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/service/:slug" element={<ServiceDetail />} />
      <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
