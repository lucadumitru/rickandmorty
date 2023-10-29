import Image from "next/image";
import searchIcon from "public/icons/search-icon.svg";
import type { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Filter by name...",
  className
}) => (
  <div className={`relative ${className}`}>
    <input
      className="border-myGray placeholder-myGray h-full w-full rounded-[8px] border border-[1px] p-[16px] pl-[48px] leading-6 focus:placeholder:opacity-0"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
    <Image
      alt="Search icon"
      className="absolute left-[16px] top-[50%] -translate-y-[50%]"
      src={searchIcon as string}
    />
  </div>
);
