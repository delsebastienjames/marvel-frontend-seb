import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // permet de rendre clickable

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-seb.herokuapp.com/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.results.map((character, index) => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            key={character._id}
            offer={character}
            to={`/character/${character._id}`}
          >
            <p className="card">
              <div className="marvel-characters">
                <h4 className="name">{character.name}</h4>

                <img
                  className="picture-characters"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                />
                <div className="presentation-characters">
                  {character.description && <div>{character.description}</div>}
                  <br></br>
                </div>
              </div>
            </p>
          </Link>
        );
      })}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Characters;
