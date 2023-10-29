interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`mx-auto  max-w-[1020px] px-3.5 ${className}`}>{children}</div>
);
