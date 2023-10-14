/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold font-xl md-text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((items, id) => (
            <MovieCard item={items} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}
