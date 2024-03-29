// To ensure that each LinkButton appends a particular component to the page when clicked, you can use conditional rendering based on the selectedButton state. Here's how you can modify your code to achieve this:

// jsx
// Copy code
import { useState } from "react";
import DiscoverPage1 from "../components/DiscoverPage1";
import LinkButton from "../components/LinkButton";
import { FaClock, FaSearch } from "react-icons/fa";
import GymComponent from "../components/GymComponent";
import WalkRunComponent from "../components/WalkRunComponent";

function Discover() {
  const [selectedButton, setSelectedButton] = useState("At home");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderComponent = () => {
    switch (selectedButton) {
      case "At home":
        return <DiscoverPage1 />;
      case "Gym":
        return <GymComponent />;
      case "Walk & run":
        return <WalkRunComponent />;
      default:
        return <DiscoverPage1 />;
    }
  };

  return (
    <>
      <div className="static">
        <div className="flex justify-between">
          <div className="">
            <span className="uppercase text-4xl font-semibold font-serif italic">
              Discover
            </span>
          </div>
          <div className="flex text-4xl gap-5 mx-2 text-blue-500">
            <button>
              <FaSearch className="" />
            </button>
            <button>
              <FaClock className="" />
            </button>
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
// In this modified code:

// I've added GymComponent and WalkRunComponent components, which will be rendered based on the selected button.
// The renderComponent function determines which component to render based on the selectedButton state.
// The renderComponent function is called within the JSX to render the appropriate component based on the selected button.
