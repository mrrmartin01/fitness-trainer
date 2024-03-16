import { useState } from "react";
import DiscoverPage1 from "../components/DiscoverPage1";
import GymComponent from "../components/GymComponent";
import WalkRunComponent from "../components/WalkRunComponent";
import LinkButton from "../components/LinkButton";
// import { FaClock, FaSearch } from "react-icons/fa";

function Discover() {
  const [selectedButton, setSelectedButton] = useState("At home");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderComponent = () => {
    switch (selectedButton) {
      case "At home":
        return <DiscoverPage1/>;
      case "Gym":
        return <GymComponent/>;
      case "Walk & run":
        return <WalkRunComponent/>;
      default:
        return <DiscoverPage1/>;
    }
  }

  return (
    <>
      <div className="static">
        <div className="flex justify-between">
          <div className="">
            <span className="uppercase text-4xl font-semibold font-serif italic">
              Discover
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-5 m-2 rounded-lg w-full h-[50px]">
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

      {renderComponent()}
    </>
  );
}

export default Discover;