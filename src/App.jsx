import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CloudBackground from "./components/CloudBackground";
import FloatingBirds from "./components/FloatingBirds";
import StarBackground from "./components/StarBackground";
import { useTheme } from "@utils/ThemeProvider";

function App() {
  const { theme } = useTheme();
  console.log("Current theme:", theme); // Debug log

  return (
    <>
      {/* Background Elements */}
      {theme === "light" ? (
        <>
          <CloudBackground />
          <FloatingBirds />
        </>
      ) : (
        <StarBackground />
      )}
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
