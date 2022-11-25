import React, { useContext } from "react";
import { MovieDataContext } from "../../context/MovieData.context";

const Home = () => {
  const { movieData } = useContext(MovieDataContext);
  console.log(movieData);

  return (
    <div>
      <h1>Hey</h1>
      {movieData?.map((el) => console.log(el))}
    </div>
  );
};

export default Home;
