import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Workouts from "./pages/Workouts"
import About from "./pages/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} > 
        <Route index element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="settings" element={<Settings />}/>
        <Route path="workouts" element={<Workouts />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
  )
}

export default App
