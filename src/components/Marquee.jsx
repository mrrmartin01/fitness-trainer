import { useState } from "react";
import { Link } from "react-router-dom";
import WorkoutsData from "../data/WorkoutsData";

function Marquee() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div
      className="flex justify-center overflow-x-auto"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
        {WorkoutsData.map((workouts) => (
          <div
            key={workouts.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-64 mb-4"
          >
            <Link to={workouts.url}>
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
              </div>
            </Link>
            <button
              onClick={() => handleButtonClick(workouts.url)}
              className="w-full inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-b-lg hover:bg-sky-500 transition duration-300"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
      {selectedComponent}
    </div>
  );
}

export default Marquee;
