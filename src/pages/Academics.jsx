import { Link } from "react-router-dom";

function Academics() {
  return (
    <>
      <Link to={"/academics"} className="underline text-blue-800 font-bold">
        Academics
      </Link>
    </>
  );
}

export default Academics;
