import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import HeaderHome from "./HeaderHome";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className=" absolute w-full h-[550px] bg-gradient-to-r from-[rgba(0,0,0,0.72)]"></div>{" "}
        <HeaderHome />
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          onAuxClickCapture={movie?.title}
        ></img>
        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-[10px]">
            {movie?.title}
          </h1>
          <p className=" mb-[10px] w-[600px] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {" "}
            {truncateString(movie?.overview, 200)}
          </p>
          <div className="text-white flex gap-x-[20px] mb-[10px]">
            <button className=" bg-[#6665659b] py-[10px] px-9 font-semibold flex gap-x-[8px] items-center rounded-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ltr-4z3qvp e1svuwfo1"
                data-name="CircleI"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              More Information
            </button>
          </div>
          <p className="text-gray-400 mb-[10px]">{movie?.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
