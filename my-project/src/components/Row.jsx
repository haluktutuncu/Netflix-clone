/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1500;
  };

  return (
    <>
      <h2 className="text-white font-bold font-xl md-text-xl p-4">{title}</h2>
      <div className="relative flex items-center peer">
        <FontAwesomeIcon
          className="text-white scale-150 absolute rounded-full cursor-pointer translate-x-10 p-[16px] py-[13px] bg-black/30 hover:bg-black/90 z-10 "
          icon={faChevronLeft}
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className={`no-scrollbar w-full h-full relative whitespace-nowrap scroll-smooth box-border  `}
        >
          {movies.map((items, id) => (
            <MovieCard item={items} key={id} />
          ))}
        </div>
        <FontAwesomeIcon
          className="text-white scale-150 absolute rounded-full cursor-pointer z-10 right-0 -translate-x-10 p-[16px] py-[13px]
           bg-black/30
           hover:bg-black/90 "
          icon={faChevronRight}
          onClick={slideRight}
        />
      </div>
    </>
  );
}
