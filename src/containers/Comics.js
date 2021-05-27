import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-seb.herokuapp.com/comics"
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

  //   return isLoading ? (
  //     <span>En cours de chargement...</span>
  //   ) : (
  //     <div className="presentation">
  //       {data.results.map((comics, index) => {
  //         return <div className="books">{comics.name}</div>;
  //       })}
  //     </div>
  //   );
  // };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.results.map((comic, index) => {
        return (
          <p className="card">
            <div className="marvel-comics">
              <h4 className="name">{comic.name}</h4>
              <img
                className="picture-comics"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt=""
              />
              <div className="presentation-comics">
                {comic.description && <div>{comic.description}</div>}
                <br></br>
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
export default Comics;
