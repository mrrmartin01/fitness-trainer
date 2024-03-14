// import { useState } from "react";
import Describe from "../data/Describer";
import DescribCards from "./DescribCards";
import SettingsDescib from "./SettingsDescib";
import Goals from "./Goals";

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
        <SettingsDescib value="Body focus" />
        <Goals />

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
