import './inputfield.css';

function InputField({ placeholder, type, className, label }) {
  return (
    <>
      <label className="mt-5 label-style">{label}</label>
      <input type={type} className={className} placeholder={placeholder} />
    </>
  );
}

export default InputField;
