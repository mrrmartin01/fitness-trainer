import GoalsData from "../data/GoalsData";

function Goals() {
  return (
    <div
      className="flex pl-[82%] pr-[0.2%] justify-center overflow-x-auto"
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
          border-radius: 5px; 
        }
        `}
      </style>
      <div className="flex gap-1">
        {GoalsData.map((level) => (
          <div key={level.id} className="">
            <div className="flex justify-evenly">
              <div className="h-[180px] w-[100%] bg-green-500">
                <img src={level.img} alt={level.type}/>
              </div>
            </div>

            {/* Map workouts */}
            <div className="flex flex-wrap justify-center mb-1">
              {level.workouts.map((workout) => (
                <div key={workout.id} className="w-[500px] h-[70px] border-t-2">
                  <div className="flex items-center justify-between h-full bg-gray-800 p-4 cursor-pointer">
                    <div className="w-[20%] h-full">
                      <img
                        src={workout.image}
                        alt={workout.type}
                        className="w-full h-full object-cover rounded-lg"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-grow mx-3">
                      <span className="text-3xl font-medium">
                        {workout.type} * {level.name}
                      </span>
                      <span className="italic">{workout.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
