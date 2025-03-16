import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-home">
          <IoHomeOutline />
        </Link>
        <Link to="/signup" className="nav-btn">
          <PiSignIn /> Register
        </Link>
      </nav>
    </header>
  );
}
