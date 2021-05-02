import "./nav.styles.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <ul className="navbar">
          <li className="nav-links">New Books</li>
          <li className="nav-links">Category</li>
          <li className="nav-links">My Books</li>
          <li className="nav-links">Auth</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
