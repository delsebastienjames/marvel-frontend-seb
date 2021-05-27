import { Link } from "react-router-dom"; // permet de rendre clickable

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <p className="title-marvel">
        <span data-text="M" className="m">
          M
        </span>
        <span data-text="A">A</span>
        <span data-text="R">R</span>
        <span data-text="V">V</span>
        <span data-text="E">E</span>
        <span data-text="L" className="l">
          L
        </span>
      </p>
      {userToken ? (
        <button className="connecter" onClick={() => setUser(null)}>
          Se déconnecter
        </button>
      ) : (
        <>
          <div className="row">
            <Link
              style={{ textDecoration: "none" }}
              className="inscrire"
              to="/"
            >
              <button className="inscrire"> CHARACTERS</button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="inscrire"
              to="/comics"
            >
              <button className="inscrire-bis"> COMICS</button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="inscrire"
              to="/login"
            >
              <button className="inscrire"> Se connecter</button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="inscrire"
              to="/signup"
            >
              <button className="inscrire-bis">S'inscrire</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
