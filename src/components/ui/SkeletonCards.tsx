import { Grid } from "./Grid";

interface SkeletonCardsProps {
  className?: string;
  variants: "characters" | "episodes" | "locations";
}

export const SkeletonCards: React.FC<SkeletonCardsProps> = ({ className, variants }) => (
  <Grid className={className}>
    {Array.from({ length: 20 }, (_, index) => (
      <div
        key={index}
        className="border-gray-200 flex animate-pulse flex-col rounded border shadow"
        role="status"
      >
        {variants === "characters" && (
          <div className="bg-gray-300 xsm:h-[170px] mb-4 flex h-[230px] w-full items-center justify-center rounded">
            <svg
              aria-hidden="true"
              className="text-gray-200 dark:text-gray-600 h-10 w-10"
              fill="currentColor"
              viewBox="0 0 16 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        )}
        <div
          className={`flex flex-col  px-[16px] py-[12px] ${
            variants === ("episodes" || "locations") && "items-center"
          } ${variants === "episodes" && "py-[26px]"} ${variants === "locations" && "py-[38px]"}`}
        >
          {variants === "episodes" && (
            <div className="bg-gray-200 mb-8 h-2.5 w-[50%] rounded-full" />
          )}
          <div className="bg-gray-200 mb-4 h-2.5 w-[70%] rounded-full" />
          <div className="bg-gray-200  h-2 w-[35%] rounded-full" />
        </div>
      </div>
    ))}
  </Grid>
);
