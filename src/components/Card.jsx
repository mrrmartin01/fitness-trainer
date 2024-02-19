import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <>
      <div className="w-[45%] h-40 rounded-xl bg-gray-500">{children}</div>
    </>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
