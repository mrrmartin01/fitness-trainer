import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Workouts from "./pages/Workouts";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Homepage />} />
          <Route path="home/dashboard" element={<Dashboard />} />
          <Route path="home/login" element={<Login />} />
          <Route path="home/settings" element={<Settings />} />
          <Route path="home/workouts" element={<Workouts />} />
          <Route path="home/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
