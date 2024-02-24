import { Link } from "react-router-dom";
import Rows from "./Rows";
import WorkOutCard from "./WorkCard";
import WorkoutsData from "..//WorkoutsData";

function Marquee() {
  return (
    <>
      <WorkOutCard
        className={
          "flex flexrow items-center gap-2 w-[40%] h-[40%] bg--500"
        }
      >
        <div className=" flex-wrap-reverse gap-2">
          {WorkoutsData.map((workouts) => (
            <Rows
              key={workouts._id}
              value={
                <>
                  <p className="text-[#ea580c] bg-blue-300">{workouts.type}</p>
                </>
              }
            />
          ))}
        </div>
      </WorkOutCard>

      <marquee className="">
        {WorkoutsData.map((workouts) => (
          <Link
            key={workouts._id}
            to={workouts.url}
            className="flex flex-row items-center gap-2"
          >
            <img src={workouts.img} alt={workouts.type} className="w-16 h-16" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{workouts.type}</h1>
              <p className="text-gray-700">{workouts.intro}</p>
            </div>
          </Link>
        ))}
      </marquee>
    </>
  );
}

export default Marquee;