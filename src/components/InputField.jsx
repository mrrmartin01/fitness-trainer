import PropTypes from 'prop-types'; // Import PropTypes
import './inputfield.css';

function InputField({ placeholder, type, className, label,onChange, autoComplete }) {
  return (
    <>
      <label className="mt-5 label-style">{label}</label>
      <input type={type} className={className} placeholder={placeholder} onChange={onChange} autoComplete={autoComplete} />
    </>
  );
}

// Define PropTypes for the component
InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired, 
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired, 
};

export default InputField;
