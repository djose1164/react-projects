import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.svg";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile username="djose1164" />} />
          <Route path="/projects" element={<Projects username="djose1164" />} />
          <Route path="/projects/:name" element={<ProjectDetail username="djose1164" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
