import PropTypes from 'prop-types'; 

function Button({value, onClick, className, type, icon}) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {icon}
      {value}
    </button>
  );
}
Button.PropTypes ={
  value : PropTypes.string.isRequired,
  onClick : PropTypes.func.isRequired,
}

export default Button;  