// import { useEffect, useState } from "react";
import Describe from "../data/Describer";
import BeginnerAbs from "./workouts/Abs/BeginnerAbs";
import DescribCards from "./DescribCards";
import SettingsDescib from "./SettingsDescib";

function DiscoverPage1() {
  // const [holder ,setHolder] = useState()

  // useEffect(() => {
  //   fetch("http://localhost")
  //   .then((res) => {if(!res.ok){throw new Error("Your network is not responding");}
  //   return res.json();
  // })
  // .then((res) => {setHolder(res);})
  // .catch ((error) => {alert("Failed to connect", error)})
  // })
  return (
    <>
      <div className="overflow-x-hidden">
        <SettingsDescib value="Body focus" />
        <div className="flex gap-3 w-full  bg-red-500">
        {/* {holder.map((card)) => (<div className=""></div>)} */}
        </div>

        <SettingsDescib value="Guess You might need" />
        <div className="flex flex-wrap justify-center ">
          {Describe.map((workoutCards) => (
            <DescribCards
              key={workoutCards.id}
              image={workoutCards.image}
              type={workoutCards.type}
              duration={workoutCards.duration}
            />
          ))}
        </div>
      </div>

      <BeginnerAbs/>
    </>
  );
}

export default DiscoverPage1;
