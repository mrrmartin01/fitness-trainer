import PropTypes from 'prop-types';
import './inputfield.css';

function InputField({ type, className, label,onChange, autoComplete, placeholder }) {
  return (
    <>
      <label className="mt-1 label-style text-lg">{label}</label>
      <input type={type} className={className} onChbange={onChange} placeholder= {placeholder} autoComplete={autoComplete} />
    </>
  );
}

// Define PropTypes for the component
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired, 
  placeholder: PropTypes.string, 
  label: PropTypes.string, 
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired, 
};

export default InputField;
