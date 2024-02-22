// import { Link } from "react-router-dom";
import Rows from "./Rows";
import WorkOutCard from "./WorkOutCard";
// import WorkoutsData from "../data/WorkoutsData";

function Marquee() {
  return (
    <>
      <WorkOutCard
        className={
          "flex flex-row items-center gap-2 w-[40%] h-[40%] bg-red-300"
        }
      >
        <Rows
          value={
            <>
              <p className="text-[#ea580c]">sdrfg</p>
            </>
          }
        />
        <Rows
          value={
            <>
              <p className="text-[#ea580c]">sdrfg</p>
            </>
          }
        />
      </WorkOutCard>

      {/* {WorkoutsData.map((workouts) => (
        <marquee key={workouts._id} className="">
          <Link to={workouts.url} className="flex flex-row items-center gap-2">
            <img src={workouts.img} alt={workouts.type} className="w-16 h-16" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{workouts.type}</h1>
              <p className="text-gray-700">{workouts.intro}</p>
            </div>
          </Link>
        </marquee>
      ))} */}
    </>
  );
}

export default Marquee;
