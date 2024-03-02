import { Link } from "react-router-dom";
import WorkoutsData from "../data/WorkoutsData";

function Marquee() {
  return (
    <div
      className="flex justify-center overflow-x-auto"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            width: 2px; 
            background-color: transparent;
            
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2); 
            border-radius: 4px; 
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
        {WorkoutsData.map((workouts) => (
          <Link
            key={workouts._id}
            to={workouts.url}
            className="bg-gray-800 rounded-[15px] overflow-hidden shadow-lg flex-shrink-0 w-64 mb-3"
          >
            <img
              src={workouts.img}
              alt={workouts.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">
                {workouts.type}
              </h2>
              <p className="text-sm text-gray-300 mt-2">{workouts.intro}</p>
              <button className="w-full inline-block mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-2xl hover:bg-sky-500 transition duration-[0.5s]">
                Get Started
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
