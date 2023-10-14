import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ item, key }) {
  const [like, setLike] = useState([]);
  return (
    <div className="w-[160px] bg-zinc-900 sm:w-[260px] md:w-[240px] lg:w-[215px] col-span cursor-pointer inline-block relative m-2 group">
      <img
        className={`cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[121px] `}
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="  opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-[140%] group-hover:-translate-y-[6vw] group-hover:opacity-100">
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
            <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
