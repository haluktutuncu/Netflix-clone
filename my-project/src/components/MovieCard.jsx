export default function MovieCard({ item, key }) {
  return (
    <div className="w-[160px] bg-zinc-900 sm:w-[260px] md:w-[240px] lg:w-[215px] col-span cursor-pointer inline-block relative m-2 group">
      <img
        className={`cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0  delay-300 w-full h-[121px] `}
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="  opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-[110%] group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw]  group-hover:opacity-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
          className={`
          cursor-pointer 
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
          `}
        />
        <div
          className={`
        z-10
        bg-zinc-800
        p-6
        absolute
        w-full
        transition
        shadow-md
        rounded-b-md

    
        `}
        ></div>
      </div>
    </div>
  );
}
