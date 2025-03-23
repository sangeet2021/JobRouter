import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>Error</h1>
      <p>The page you are trying to access is not found!</p>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
