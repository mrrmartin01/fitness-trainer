import PropTypes from "prop-types";
function WorkOutCard({className , children}) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  )
}

WorkOutCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default WorkOutCard
