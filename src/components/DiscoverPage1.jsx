import { useState } from "react";
import Describe from "../data/Describer";
import BeginnerAbs from "./workouts/Abs/BeginnerAbs";
import DescribCards from "./DescribCards";
import SettingsDescib from "./SettingsDescib";
import Button from "./Button";
import Loader from "./Loader";
import Goals from "./Goals";

function DiscoverPage1() {
  // const [holder, setHolder] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true); // State variable to control loader visibility

  const videoPopup = () => {
    setShowVideo(true);
    setLoading(false);
  };

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
        <Goals/>

        <SettingsDescib value="Guess You might need" />
        <div className="flex flex-wrap justify-center">
          {Describe.map((workoutCards) => (
            <DescribCards
              key={workoutCards.id}
              image={workoutCards.image}
              type={workoutCards.type}
              duration={workoutCards.duration}
              onClick={videoPopup}
            />
          ))}
        </div>
      </div>

      <BeginnerAbs />
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white text-center p-0 rounded-xl w-[55%] h-[600px] ">
            {
              <div className="text-black rounded-t-xl bg-red-5yu00 w-full  h-[550px]">
                {loading ? (
                  <Loader />
                ) : (
                  <iframe
                    className="w-full h-full rounded-t-xl"
                    src="https://lies.com"
                  />
                )}
              </div>
            }
            <Button
              value="Close"
              onClick={() => setShowVideo(false)}
              className="w-[30%] rounded-lg mt-1 p-2 bg-red-400"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default DiscoverPage1;
