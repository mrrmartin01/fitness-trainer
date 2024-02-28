import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Daily from "./pages/Daily";
import Settings from "./pages/Settings";
import Personal from "./pages/Personal";
import Discover from "./pages/Discover";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<Home />}>
          <Route index element={<Homepage />} />
          <Route path="daily" element={<Daily />} />
          <Route path="login" element={<Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="personal" element={<Personal />} />
          <Route path="discover" element={<Discover />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
