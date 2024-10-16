import { RxHamburgerMenu } from "react-icons/rx";

function Logo({ setOpen }) {
  return (
    <div className="flex gap-3 items-center">
      <RxHamburgerMenu onClick={() => setOpen(true)} className="sm:hidden" />
      <img src="logo.cd9e58e4.svg" alt="logo" className="h-12" />
    </div>
  );
}

export default Logo;
