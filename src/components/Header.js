import { Link } from "react-router-dom"; // permet de rendre clickable

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <p className="title-marvel">
        <span data-text="M">M</span>
        <span data-text="A">A</span>
        <span data-text="R">R</span>
        <span data-text="V">V</span>
        <span data-text="E">E</span>
        <span data-text="L">L</span>
      </p>
      {userToken ? (
        <button className="connecter" onClick={() => setUser(null)}>
          Se déconnecter
        </button>
      ) : (
        <>
          <Link className="inscrire" to="/signup">
            S'inscrire
          </Link>
          <Link className="connecter" to="/login">
            Se connecter
          </Link>
        </>
      )}
    </div>
  );
};

//       <Link>
//         <button className="connecter"> se connecter</button>
//         <button className="inscrire"> s'inscrire</button>
//       </Link>
//     </div>
//   );
// };
export default Header;
