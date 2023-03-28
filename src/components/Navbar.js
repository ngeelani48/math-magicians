import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1 className="main-title">Math Magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <hr />
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <hr />
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
    <Outlet />
  </nav>
);

export default Navbar;
