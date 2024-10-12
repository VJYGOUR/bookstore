import { Link } from "react-router-dom";

function Fiction() {
  return (
    <>
      <Link to={"/fiction"} className="underline text-blue-800 font-bold">
        Fiction
      </Link>
    </>
  );
}

export default Fiction;
