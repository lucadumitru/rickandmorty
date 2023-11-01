/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Button } from "./Button";

interface LoadMoreBtnProps {
  size: number;
  pages: number;
  setSize: any;
  className?: string;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ size, pages, setSize, className }) => {
  const loadMore = () => {
    if (size <= pages) {
      setSize(size + 1);
    }
  };
  return (
    <Button
      className={`mt-[20px] max-w-full sm:max-w-[154px] ${className}`}
      disabled={size >= pages}
      onClick={loadMore}
    >
      Load more
    </Button>
  );
};
