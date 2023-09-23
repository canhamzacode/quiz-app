import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1>
          Q<span className="Navgreen">ui</span>z
        </h1>
      </Link>
    </div>
  );
};

export default NavBar;
