"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-6 flex flex-col gap-3 hover:border-black transition cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      <div className="flex flex-row gap-6 items-center">
        <Icon size={30} />
        <div className="font-semibold">{label}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
