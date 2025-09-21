import "../../assets/sass/core/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid justify-content-end">
        <ul className="navbar-nav Home-content">
          <li className="nav-item">
            <a className="nav-link" href="#inicio">
              Início
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#expertise">
              Expertise
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfólio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">
              Fale comigo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
