import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Outlet />
    </MantineProvider>
  );
}

export default App;
