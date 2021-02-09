import {NavLink} from 'react-router-dom';
import '../assets/css/navbar.css';
const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Consulting</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/project">Project</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Header;