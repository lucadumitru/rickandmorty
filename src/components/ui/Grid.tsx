interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className }) => (
  <div
    className={`xsm:grid-cols-2 grid w-full grid-flow-row grid-cols-1 gap-[20px] sm:grid-cols-3 md:grid-cols-4 ${className}`}
  >
    {children}
  </div>
);
