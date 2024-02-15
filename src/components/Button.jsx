function Button({value, onClick, className, type, icon}) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {icon}
      {value}
    </button>
  );
}

export default Button;  