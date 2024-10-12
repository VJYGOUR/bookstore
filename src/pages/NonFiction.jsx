import { Link } from "react-router-dom";

function NonFiction() {
  return (
    <>
      <Link to={"/nonfiction"} className="underline text-blue-800 font-bold">
        NonFiction
      </Link>
    </>
  );
}

export default NonFiction;
