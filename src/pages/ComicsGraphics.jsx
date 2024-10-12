import { Link } from "react-router-dom";

function ComicsGraphics() {
  return (
    <>
      <Link
        to={"/comicsandgraphics"}
        className="underline text-blue-800 font-bold"
      >
        Comics and graphics
      </Link>
    </>
  );
}
export default ComicsGraphics;
