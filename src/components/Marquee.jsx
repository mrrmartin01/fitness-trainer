import { Link } from "react-router-dom";
import WorkoutsData from "../data/WorkoutsData";

function Marquee() {
  return (
    <div className="flex justify-center overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
      
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
        {WorkoutsData.map((workouts) => (
          <div key={workouts.id} className="bg-black rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-64 mb-4">
            <Link to={workouts.type.toLowerCase()}>
              <img src={workouts.img} alt={workouts.type} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">{workouts.type}</h2>
                <p className="text-sm text-gray-300 mt-2">{workouts.intro}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
