import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

import { VscAccount } from "react-icons/vsc";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import SideBar from "./SideBar";
import PageLink from "./PageLink";

function AppLayout() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <header className="px-4 relative">
        {sideBar && <SideBar setOpen={setSideBar} />}
        <div className="flex items-center justify-between">
          <Logo setOpen={setSideBar} />
          <SearchBar display="hidden sm:flex sm:w-[40%]" />
          <div className="flex gap-2 ">
            <VscAccount size={25} />
            <CiShoppingCart size={25} />
          </div>
        </div>
        <section>
          <SearchBar display="flex sm:hidden" />
          {/* PAGES DIV FOR DESKTOP */}
          <PageLink />
        </section>
      </header>

      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default AppLayout;
