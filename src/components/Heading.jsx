import PropTypes from "prop-types";

function Heading(prop) {
  return (
    <div>
      <p className="uppercase flex bg-gradient-to-l text-gray-300 shadow-lg shadow-gray-600 rounded-lg tracking-[1px] italic from-sky-500 to-blue-600 text-4xl p-4  font-bold">
        {prop.value}
      </p>
    </div>
  );
}

Heading.propTypes = {
    value: PropTypes.string,
};

export default Heading;
