import PropTypes from 'prop-types';

function Button({value, onClick, className, type, icon}) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {icon}
      {value}
    </button>
  );
}

Button.propTypes ={
  value : PropTypes.string.isRequired,
  onClick : PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element
}

export default Button;  