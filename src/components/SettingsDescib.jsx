import PropTypes from "prop-types";

function SettingsDescib({value}) {
  return (
    <div className="m-2 w-[102.3%] h-[70px] flex justify-start ">
    <h2 className="font-mono tracking-4 font-bold text-4xl text-black flex p-20 self-center">
      {value}
    </h2>
  </div>
  )
}

SettingsDescib.propTypes = {
    value: PropTypes.string.isRequired,
  };



export default SettingsDescib
