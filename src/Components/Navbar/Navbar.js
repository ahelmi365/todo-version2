import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <h2 className="app-title">iDo</h2>
      <ul className="navbar-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Expense">Expense</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
}
