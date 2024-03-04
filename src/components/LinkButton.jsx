import PropTypes from "prop-types";

function LinkButton({ value, isSelected, onClick }) {
  return (
    <button
      className={`text-xl font-semibold font-mono rounded-lg  p-2 w-[150px] button capitalize ${
        isSelected ? "bg-black text-white" : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

LinkButton.propTypes = {
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LinkButton;
