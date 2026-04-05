import { Link } from "react-router-dom";
import "./Notfound.css";

function Notfound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Oops! Page Not Found ❌</h2>

      <Link to="/">
        <button>Go Home 🌸</button>
      </Link>
    </div>
  );
}

export default Notfound;