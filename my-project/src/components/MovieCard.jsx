import { useState } from "react";

export default function MovieCard({ item, key }) {
  return (
    <div className=" w-[160px] bg-zinc-900 sm:w-[260px] md:w-[240px] lg:w-[215px] col-span cursor-pointer inline-block relative m-2 group">
      <img
        className={`cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[121px] `}
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute opacity-0 top-0 transition duration-200  invisible sm:visible delay-300 w-full scale-0 group-hover:scale-[140%] group-hover:-translate-y-[6vw] group-hover:opacity-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
          className={`
          cursor-pointer
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[130px]
          `}
        />
        <div
          className={`
        z-10
        bg-zinc-800
        
        absolute
        w-full
        p-2
        transition
        shadow-md
        rounded-b-md
    h-[150px]
        `}
        >
          <p className="text-white font-[10px]">{item?.title}</p>
          <p className="text-zinc-300 text-[12px]">{item?.release_date}</p>
          <div className="w-full h-full text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 104 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.4765 15.1145L52.9012 17.5273L55.369 15.1585L60.5595 10.1763C70.578 0.559779 85.6749 1.67269 94.461 12.8526C103.405 24.2341 102.263 41.5384 92.0397 51.3517L52.8774 88.9426L52.7229 89.0909L52.5876 89.2569L50.5221 91.7921L12.0924 53.5507C1.45103 42.9615 0.553227 24.6677 10.1843 12.8464C19.6505 1.2275 35.6365 0.347118 46.078 10.7375L50.4765 15.1145Z"
                fill="white"
                stroke="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
