import Proptypes from "prop-types";
import { MdKeyboardArrowRight } from "react-icons/md";

function SettingsPath({ value ,  icon , className }) {
  return (
    <div className="bg-gray-700 hover:bg-green-100 hover:text-black border-b-[1px] border-gray-300 w-[102.3%] h-[70px] flex flex-row items-center justify-between">
      <button className="flex flex-row items-center justify-between p-3 w-full h-full">
        <div className="flex flex-row items-center justify-center">
          <div className={className}>{icon}</div>
          <div className ="pl-3 text-[20px] font-semibold font-Arial">{value}</div>
        </div>
        <div className="">
        <MdKeyboardArrowRight className ="text-[40px]"/>
        </div>
      </button>
    </div>
  );
}

SettingsPath.propTypes = {
  value: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
  icon: Proptypes.element.isRequired,
};

export default SettingsPath;
