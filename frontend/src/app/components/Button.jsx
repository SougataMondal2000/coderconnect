const Button = ({ label, onClick, bgColor, textColor }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-full text-sm  font-semibold"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {label}
    </button>
  );
};

export default Button;
