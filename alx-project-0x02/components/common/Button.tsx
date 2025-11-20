import { type ButtonProps } from "@/interfaces/index";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  label,
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button className={`${sizeClasses[size]} ${shape}  bg-amber-300 text-black`}>
      {label}
    </button>
  );
};

export default Button;
