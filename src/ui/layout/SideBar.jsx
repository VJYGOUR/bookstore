import { Link } from "react-router-dom";

function SideBar({ setOpen }) {
  return (
    <aside className="bg-sidebar fixed w-[80%] pl-4 h-full left-0 b sm:hidden">
      <span onClick={() => setOpen(false)} className="text-5xl">
        &times;
      </span>

      <div className="flex flex-col pt-10 gap-5 sm:flex sm:justify-between  ">
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
      </div>
    </aside>
  );
}

export default SideBar;
