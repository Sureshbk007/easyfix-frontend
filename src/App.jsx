import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <Outlet />
      <Footer />
    </MantineProvider>
  );
}

export default App;
