import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>RajuBooks</div>
      <div className="flex flex-col ">
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
    </>
  );
}

export default HomePage;
