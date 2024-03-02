import Proptypes from "prop-types";
import { MdKeyboardArrowRight } from "react-icons/md";

function SettingsPath({
  value,
  button: buttonValue = <MdKeyboardArrowRight />,
  icon,
  className,
}) {
  return (
    <div className="bg-gray-700 hover:bg-gray-900 transition duration-[0.4s] ease-linear border-b-[1px] border-gray-300 w-[102.3%] h-[70px] flex flex-row items-center justify-between">
      <button className="flex flex-row items-center justify-between p-3 w-full h-full">
        <div className="flex flex-row items-center justify-center">
          <div className={` ${className}`}>{icon}</div>
          <div className="pl-3 text-[20px] font-semibold font-Arial capitalize">
            {value}
          </div>
        </div>
        <div className="">
          <span className="text-[40px]">{buttonValue}</span>
        </div>
      </button>
    </div>
  );
}

SettingsPath.propTypes = {
  value: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
  icon: Proptypes.element.isRequired,
  button: Proptypes.oneOfType([Proptypes.element, Proptypes.func]).isRequired,
};

export default SettingsPath;
