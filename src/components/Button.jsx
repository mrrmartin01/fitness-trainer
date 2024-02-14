function Button({value, onClick, className, type, icon}) {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {value}
    </button>
  );
}

export default Button;  