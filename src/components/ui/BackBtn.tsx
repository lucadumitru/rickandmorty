"use client";

import { useRouter } from "next/navigation";
import { karla } from "public/fonts/fonts";

interface BackBtnProps {
  className?: string;
}

export const BackBtn: React.FC<BackBtnProps> = ({ className }) => {
  const router = useRouter();
  return (
    <button
      className={`arrow-back ${className} relative flex items-center gap-2 text-[18px] font-bold capitalize ${karla.className}`}
      onClick={() => router.back()}
    >
      GO BACK
    </button>
  );
};
