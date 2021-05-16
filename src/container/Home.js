import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom"; // permet de rendre clickable

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-seb.herokuapp.com/characters"
        );
        //console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  // Ternaire
  return isLoading ? (
    <p>En cours de chargement ...</p>
  ) : (
    <div>
      {data.results.map((character) => {
        // key très important (enlève également un warning du au .map)
        return (
          <Link
            style={{ textDecoration: "none" }}
            key={character._id}
            offer={character}
            to={`/character/${character._id}`}
          >
            <div className="main">
              <p className="air">
                <img
                  className="picture"
                  style={{ height: 140 }}
                  src={character.product_image.secure_url}
                  alt={data.product_name}
                />
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
