/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold font-xl md-text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className={`w-full h-full whitespace-nowrap scroll-smooth relative overflow-x-auto`}
        >
          {movies.map((items, id) => (
            <MovieCard item={items} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}
