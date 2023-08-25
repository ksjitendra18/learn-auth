import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="px-3 md:w-[1140px] my-3 mx-auto flex justify-between">
      <h1 className="text-2xl font-bold">
        <Link to="/">Learn Auth</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
