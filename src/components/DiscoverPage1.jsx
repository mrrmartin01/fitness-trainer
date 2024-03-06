import Describe from "../data/Describer";
import DescribCards from "./DescribCards";
import SettingsDescib from "./SettingsDescib";

function DiscoverPage1() {
  return (
    <>
      <div className="overflow-x-hidden">
        <SettingsDescib value="Body focus" />

        <SettingsDescib value="Guess You might need" />
        <div className="flex flex-wrap justify-center ">
          {Describe.map((workoutCards) => (
            <DescribCards
              key={workoutCards.id}
              image={workoutCards.img}
              type={workoutCards.type}
              duration={workoutCards.duration}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DiscoverPage1;