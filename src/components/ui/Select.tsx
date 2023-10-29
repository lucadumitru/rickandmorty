import Image from "next/image";
import arrowDown from "public/icons/arrow-drop-down.svg";
import type { ChangeEvent } from "react";

interface SelectProps {
  options: string[];
  label: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ options, label, value, onChange }) => (
  <div className="relative">
    <Image
      alt="Arrow icon"
      className="pointer-events-none absolute right-2 top-[50%] -translate-y-[50%]"
      height={24}
      src={arrowDown as string}
      width={24}
    />
    <select
      className="border-myGray  w-full appearance-none rounded-[8px] border-[1px] p-[16px] leading-6 "
      value={value}
      onChange={onChange}
    >
      <option disabled value="">
        {label}
      </option>
      {options.map((option, index) => (
        <option key={index} className="capitalize" value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
