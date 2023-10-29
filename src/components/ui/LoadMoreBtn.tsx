import { Button } from "./Button";

interface LoadMoreBtnProps {
  size: number;
  pages: number;
  setSize: (arg0: number) => number;
  className?: string;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ size, pages, setSize, className }) => (
  <Button
    className={`mt-[20px] max-w-full sm:max-w-[154px] ${className}`}
    disabled={size >= pages}
    onClick={() => (size < pages ? setSize(size + 1) : null)}
  >
    Load more
  </Button>
);
