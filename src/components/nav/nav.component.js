import "./nav.styles.css";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <p class="navbar-brand">Navbar</p>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <p class="nav-link">
                Home <span class="sr-only">(current)</span>
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link">Link</p>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
