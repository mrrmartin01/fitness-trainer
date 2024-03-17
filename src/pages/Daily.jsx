import BeginnerAbs from "../components/workouts/abs/BeginnerAbs";
import BeginnerChest from "../components/workouts/chest/BeginnerChest";
import BeginnerLegs from "../components/workouts/legs/BeginnerLegs";
import BeginnerArms from "../components/workouts/arms/BeginnerArms";
import BeginnerShoulder from "../components/workouts/shoulder/BeginnerShoulder";
import BeginnerBack from "../components/workouts/back/BeginnerBack";


import IntermediateAbs from "../components/workouts/abs/IntermediateAbs";
import IntermediateChest from "../components/workouts/chest/IntermediateChest";
import IntermediateLegs from "../components/workouts/legs/IntermediateLegs";
import IntermediateArms from "../components/workouts/arms/IntermediateArms";
import IntermediateShoulder from "../components/workouts/shoulder/IntermediateShoulder";
import IntermediateBack from "../components/workouts/back/IntermediateBack";


import ExpertAbs from "../components/workouts/abs/ExpertAbs";
import ExpertChest from "../components/workouts/chest/ExpertChest";
import ExpertLegs from "../components/workouts/legs/ExpertLegs";
import ExpertArms from "../components/workouts/arms/ExpertArms";
import ExpertShoulder from "../components/workouts/shoulder/ExpertShoulder";
import ExpertBack from "../components/workouts/back/ExpertBack";
function Daily() {
  return (
    <div className="h-fit flex flex-col gap-4">
    <BeginnerAbs/>
    <BeginnerChest/>
    <BeginnerLegs />
    <BeginnerArms />
    <BeginnerShoulder/>
    <BeginnerBack />

    <IntermediateAbs />
    <IntermediateChest/>
    <IntermediateLegs />
    <IntermediateArms />
    <IntermediateShoulder/>
    <IntermediateBack />

    <ExpertAbs />
    <ExpertChest/>
    <ExpertLegs />
    <ExpertArms />
    <ExpertShoulder/>
    <ExpertBack />

    </div>
  )
}

export default Daily
