import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
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
    <div className="presentation">
      {data.results.map((comics, index) => {
        return <div className="books">{comics.name}</div>;
      })}
    </div>
  );
};

export default Comics;
