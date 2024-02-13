import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Workouts from "./pages/Workouts"
import About from "./pages/About"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} > 
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
