import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

//? CSS
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    // TODO: Add search functionality
    navigate(`/search?q=${search}`);
    setSearch('');

    console.log(search);
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          FavMovie
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Movie..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};
export default Navbar;
