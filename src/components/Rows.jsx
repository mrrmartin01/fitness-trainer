import PropTypes from 'prop-types';


function Rows({value}) {

  return (
    <div className="text-[30px] capitalize font-semibold">
      <span className="mt-auto">{value}</span> 
    </div>
  );
}


Rows.propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    children: PropTypes.node,
  };

export default Rows;
