"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  visibleOnMobile?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  visibleOnMobile,
}) => {
  return (
    <div className={visibleOnMobile ? "md:hidden lg:hidden" : "sm:block"}>
      <div
        onClick={onClick}
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        {label}
      </div>
    </div>
  );
};

export default MenuItem;
