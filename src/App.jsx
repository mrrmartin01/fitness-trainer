import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Daily from "./pages/Daily";
import Settings from "./pages/Settings";
import Personal from "./pages/Personal";
import Discover from "./pages/Discover";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BeginnerAbs from "./components/workouts/abs/BeginnerAbs";
import BeginnerChest from "./components/workouts/chest/BeginnerChest";
import BeginnerLegs from "./components/workouts/legs/BeginnerLegs";
import BeginnerArms from "./components/workouts/arms/BeginnerArms";
import BeginnerShoulder from "./components/workouts/shoulder/BeginnerShoulder";
import BeginnerBack from "./components/workouts/back/BeginnerBack";


import IntermediateAbs from "./components/workouts/abs/IntermediateAbs";
import IntermediateChest from "./components/workouts/chest/IntermediateChest";
import IntermediateLegs from "./components/workouts/legs/IntermediateLegs";
import IntermediateArms from "./components/workouts/arms/IntermediateArms";
import IntermediateShoulder from "./components/workouts/shoulder/IntermediateShoulder";
import IntermediateBack from "./components/workouts/back/IntermediateBack";


import ExpertAbs from "./components/workouts/abs/ExpertAbs";
import ExpertChest from "./components/workouts/chest/ExpertChest";
import ExpertLegs from "./components/workouts/legs/ExpertLegs";
import ExpertArms from "./components/workouts/arms/ExpertArms";
import ExpertShoulder from "./components/workouts/shoulder/ExpertShoulder";
import ExpertBack from "./components/workouts/back/ExpertBack";


function App() {
  return (
    <>
    <style>
        {`
          ::-webkit-scrollbar {
            width: 0px; 
            background-color: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgba(25, 25, 25, 0.7); 
            border-radius: 4px; 
          }
        `}
      </style>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="app" element={<Home />}>
          <Route index element={<Homepage />} />
          <Route path="daily" element={<Daily />} />
          <Route path="login" element={<Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="personal" element={<Personal />} />
          <Route path="discover" element={<Discover />} />
          <Route path="abs-beginner" element ={<BeginnerAbs/>}/>
          <Route path="abs-intermediate" element ={<IntermediateAbs/>}/>
          <Route path="abs-expert" element ={<ExpertAbs/>}/>
          <Route path="chest-beginner" element ={<BeginnerChest/>}/>
          <Route path="chest-intermediate" element ={<IntermediateChest/>}/>
          <Route path="chest-expert" element ={<ExpertChest/>}/>
          <Route path="Legs-Beginner" element ={<BeginnerLegs/>}/>
          <Route path="Legs-Intermediate" element ={<IntermediateLegs/>}/>
          <Route path="Legs-Expert" element ={<ExpertLegs/>}/>
          <Route path="Arms-Beginner" element ={<BeginnerArms/>}/>
          <Route path="Arms-Intermediate" element ={<IntermediateArms/>}/>
          <Route path="Arms-Expert" element ={<ExpertArms/>}/>
          <Route path="Shoulder-Beginner" element ={<BeginnerShoulder/>}/>
          <Route path="Shoulder-Intermediate" element ={<IntermediateShoulder/>}/>
          <Route path="Shoulder-Expert" element ={<ExpertShoulder/>}/>
          <Route path="Back-beginner" element ={<BeginnerBack/>}/>
          <Route path="Back-Intermediate" element ={<IntermediateBack/>}/>
          <Route path="Back-Expert" element ={<ExpertBack/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
