interface ButtonProps {
  onClick?: () => void;
  children: string;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled }) => (
  <button
    className={`${className} hover:shadow-buttonShadow w-full  rounded-[4px] bg-[#F2F9FE] p-[10px] text-[14px] font-medium uppercase leading-tight tracking-[1.25px] text-[#2196F3] shadow-cardShadow transition disabled:hidden`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
