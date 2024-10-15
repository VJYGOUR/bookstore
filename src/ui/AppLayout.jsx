import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      {/* <div className="flex flex-col ">
        <Link to={"/academics"} className="underline text-blue-800 font-bold">
          Academics
        </Link>
        <Link to={"/youngadults"} className="underline text-blue-800 font-bold">
          YoungAdults
        </Link>
        <Link to={"/nonfiction"} className="underline text-blue-800 font-bold">
          NonFiction
        </Link>
        <Link to={"/fiction"} className="underline text-blue-800 font-bold">
          Fiction
        </Link>
        <Link
          to={"/comicsandgraphics"}
          className="underline text-blue-800 font-bold"
        >
          Comics and graphics
        </Link>
        <Link to={"/childrens"} className="underline text-blue-800 font-bold">
          Childrens
        </Link>
      </div> */}

      {/* HEADER SECTION */}
      <header className="px-4 relative">
        <aside className="hidden fixed w-24 h-full left-0 bg-slate-300">
          heloo imj
        </aside>
        <div className="flex items-center justify-between">
          <img src="logo.cd9e58e4.svg" alt="logo" className="h-12" />
          <div className="hidden  items-center border border-gray-400 rounded-[.5rem] px-1 py-1 sm:flex">
            <CiSearch size={25} />
            <input
              type="text"
              placeholder="Search..."
              name="q"
              className="w-full"
            />
          </div>
          <div className="flex gap-2 ">
            <VscAccount size={25} />
            <CiShoppingCart size={25} />
          </div>
        </div>
        <section>
          <div className="flex items-center border border-gray-400 rounded-[.5rem] px-1 py-1">
            <CiSearch size={25} />
            <input
              type="text"
              placeholder="Search..."
              name="q"
              className="w-full  outline-none"
            />
          </div>
        </section>
      </header>
      {/* PAGES */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
