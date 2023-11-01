import Link from "next/link";

import type { ILocation } from "@/utils/types/types";

interface LocationCardProps {
  location: ILocation;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => (
  <div className="flex flex-col gap-2 rounded-[8px] px-[16px] py-[38px] text-center shadow-cardShadow">
    <Link className="grow hover:underline" href={`/locations/${location.id}`}>
      <h2 className="font-medium leading-6 tracking-[0.15px] sm:text-[20px]">{location.name}</h2>
    </Link>
    <div className="text-myGray text-[14px]">{location.type}</div>
  </div>
);
