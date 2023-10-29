import Hamburger from "hamburger-react";

interface BurgerIconProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const scrollLock = () => {
  const html: HTMLElement | null = document.querySelector("html");
  if (html) {
    html.classList.toggle("lock");
  }
};

export const BurgerIcon: React.FC<BurgerIconProps> = ({ isOpen, setIsOpen }) => (
  <div className="z-50 block md:hidden">
    <Hamburger
      color="#808080"
      size={24}
      toggle={setIsOpen}
      toggled={isOpen}
      onToggle={scrollLock}
    />
  </div>
);
