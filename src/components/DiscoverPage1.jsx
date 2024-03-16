// import { useState } from "react";
import Describe from "../data/Describer";
import DescribCards from "./DescribCards";
import SettingsDescib from "./SettingsDescib";
import Goals from "./Goals";
import DiscCard from "./DiscCard";

function DiscoverPage1() {
  // const [holder, setHolder] = useState([]);
  // const [showVideo, setShowVideo] = useState(false);

  // const videoPopup = () => {
  //   setShowVideo(true);
  // };

  // useEffect(() => {
  //   fetch("http://localhost")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Your network is not responding");
  //       }
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setHolder(res);
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  // }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <DiscCard className={'bg-green-500 h-[300px]'} key={20}
        value={`ghfjvuro uhwei`}
        img = { `www.yh.com`}
        />
        <SettingsDescib value="Select by goals" />
        <Goals />

        <SettingsDescib value="Body focus" />
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="w-[47%] h-[220px] bg-green-500">
              <img src="www.mis.fit" className="w-full h-full object-cover"/>
              <span>tvyibunml</span>
              </div>
            <div className="w-[47%] h-[220px] bg-green-500"></div>
          </div>
          <div className="flex"></div>
        </div>


        <SettingsDescib value="Guess You might need" />
        <div className="flex flex-wrap justify-center">
          {Describe.map((workoutCards) => (
            <>
            <DescribCards
              key={workoutCards.id}
              image={workoutCards.image}
              type={workoutCards.type}
              duration={workoutCards.duration}
            />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default DiscoverPage1;
