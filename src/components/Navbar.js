import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="links-group">
        <p>Logo</p>
        <a href="#">Live</a>
        <a href="#">Push</a>
        <a href="#">Link</a>
        <a href="#">Shop</a>
        <a href="#">Packs</a>
        <a href="#">Help</a>
      </div>
      <div className="btn-group">
        <a href="#">Try Live for free</a>
        <a href="#">Login or register</a>
      </div>
    </div>
  );
};

export default Navbar;
