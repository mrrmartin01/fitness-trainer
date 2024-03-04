import { useState } from "react";
import DiscoverPage1 from "../components/DiscoverPage1";
import LinkButton from "../components/LinkButton";

function Discover() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <div className="static">
        <span className="uppercase text-4xl font-semibold font-serif italic">
          Discover
        </span>

        <div className="flex flex-row gap-5 m-2 rounded-lg">
          <LinkButton
            value="At home"
            isSelected={selectedButton === "At home"}
            onClick={() => handleButtonClick("At home")}
          />

          <LinkButton
            value="Gym"
            isSelected={selectedButton === "Gym"}
            onClick={() => handleButtonClick("Gym")}
          />

          <LinkButton
            value="Walk & run"
            isSelected={selectedButton === "Walk & run"}
            onClick={() => handleButtonClick("Walk & run")}
          />
        </div>
        <hr className="border-t-2 border-blue-200"></hr>
      </div>

      <DiscoverPage1 />
    </>
  );
}

export default Discover;
