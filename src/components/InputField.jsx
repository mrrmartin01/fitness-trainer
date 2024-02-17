import PropTypes from 'prop-types'; // Import PropTypes
import './inputfield.css';

function InputField({ placeholder, type, className, label,onChange }) {
  return (
    <>
      <label className="mt-5 label-style">{label}</label>
      <input type={type} className={className} placeholder={placeholder} onChange={onChange} />
    </>
  );
}

// Define PropTypes for the component
InputField.propTypes = {
  placeholder: PropTypes.string.isRequired, // placeholder prop is required and must be a string
  type: PropTypes.string.isRequired, // type prop is required and must be a string
  className: PropTypes.string.isRequired, // className prop is required and must be a string
  label: PropTypes.string.isRequired, // label prop is required and must be a string
  onChange: PropTypes.func.isRequired, // label prop is required and must be a string

};

export default InputField;
