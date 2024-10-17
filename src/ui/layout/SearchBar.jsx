import { CiSearch } from "react-icons/ci";

function SearchBar({ display }) {
  return (
    <div
      className={` items-center border border-gray-400 rounded-[.5rem] px-1 py-1 ${display}`}
    >
      <CiSearch size={25} />
      <input type="text" placeholder="Search..." name="q" className="w-full" />
    </div>
  );
}

export default SearchBar;
