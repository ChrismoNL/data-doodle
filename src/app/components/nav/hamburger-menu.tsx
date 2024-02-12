interface HamburgerMenuProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

const HamburgerButton: React.FC<HamburgerMenuProps> = ({
  onClick,
  isMenuOpen,
}) => {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      className={`flex flex-col h-10 w-10 justify-center items-center group z-50 text-white`}
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isMenuOpen
            ? "rotate-45 translate-y-3 "
            : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMenuOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMenuOpen
            ? "-rotate-45 -translate-y-3"
            : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
