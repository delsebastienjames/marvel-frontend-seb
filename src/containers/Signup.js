import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://marvel-backend-seb.herokuapp.com/user/signup",
        {
          username: username, // on peut utiliser que username; si le nom est identique
          email: email, // on peut utiliser que email; si le nom est identique
          password: password, // on peut utiliser que password; si le nom est identique
        }
      );
      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        console.log(response.data.token);

        history.push("/");
      } else {
        setErrorMessage(<span className="red">Une erreur est survenue.</span>);
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(
          <span className="marvel">Cet email possède déjà un compte</span>
        );
      } else {
        setErrorMessage(<span className="red">Une erreur est survenue.</span>);
      }
      console.log(error.response);
      //console.log(error.message);
    }
  };

  return (
    <div style={{ padding: 60 }} class="form-inscrire">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)} // event c'est un argument
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)} // event c'est un argument
        />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)} // event c'est un argument
        />
        <br />
        <span>{errorMessage}</span>

        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
