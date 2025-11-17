import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="./src/assets/icons/logo_small.png"
        alt="Hugo Décrypte"
        className="logo"
      />
      <nav>
        <a href="">L'actualité</a>
        <a href="">Grands formats</a>
        <a href="">A propos</a>
        <a href="">Se connecter</a>
      </nav>
    </div>
  );
};

export default Header;
