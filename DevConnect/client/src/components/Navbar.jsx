// components/Navbar.jsx
import { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">DevConnect</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/contacts" className="text-gray-700 hover:text-blue-600">Contacts</NavLink>
              <NavLink to="/profile" className="text-gray-700 hover:text-blue-600">Profile</NavLink>
            </>
          )}
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className="text-gray-700 hover:text-green-500">Login</NavLink>
              <NavLink to="/register" className="text-gray-700 hover:text-green-500">Register</NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <NavLink to="/" onClick={toggleMenu} className="text-gray-700">Home</NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/contacts" onClick={toggleMenu} className="text-gray-700">Contacts</NavLink>
              <NavLink to="/profile" onClick={toggleMenu} className="text-gray-700">Profile</NavLink>
            </>
          )}
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" onClick={toggleMenu} className="text-gray-700">Login</NavLink>
              <NavLink to="/register" onClick={toggleMenu} className="text-gray-700">Register</NavLink>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-500 text-left">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
