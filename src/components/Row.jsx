import PropTypes from 'prop-types';

function Row({value}) {
  return (
    <div className="text-[30px] capitalize font-semibold">
      <span className="mt-auto">{value}</span>
    </div>
  );
}

Row.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node,
  };

export default Row;
