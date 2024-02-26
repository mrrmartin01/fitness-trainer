import Proptypes from "prop-types";
import { MdKeyboardArrowRight } from "react-icons/md";

function SettingsPath({ value }, { icon }) {
  return (
    <div className="flex flex-row items-center justify-center w-[102.3%] ">
      <button className="flex p-3 mt-10 h-[50px] w-full bg-black font-bold">
        {icon}
        {value}
        <span className="flex left-0">
          <MdKeyboardArrowRight />
        </span>
      </button>
    </div>
  );
}

SettingsPath.propTypes = {
  value: Proptypes.string.isRequired,
  icon: Proptypes.element.isRequired,
};

export default SettingsPath;
