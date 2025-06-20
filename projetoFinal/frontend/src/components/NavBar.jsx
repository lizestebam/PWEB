import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";
import "../css/Navbar.css";

function NavBar() {
  const { searchQuery, setSearchQuery } = useSearchContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (location.pathname !== "/") navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Fatecine</Link>
      </div>

      <form onSubmit={handleSearchSubmit} className="navbar-center">
        <input
          type="text"
          placeholder="Search for movies..."
          className="navbar-search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">My list</Link>
      </div>
    </nav>
  );
}

export default NavBar
