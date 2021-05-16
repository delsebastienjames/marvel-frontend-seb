import { useState, useEffect } from "react";
import axios from "axios";

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
          <p className="card">
            <div className="marvel-comics">
              <h4 className="name">{character.name}</h4>
              <img
                className="picture"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              />
              <div className="presentation">
                {character.description && <div>{character.description}</div>}
                <br></br>
                <div className="comics">numéro : {character.comics[0]}</div>
              </div>
            </div>
          </p>
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
