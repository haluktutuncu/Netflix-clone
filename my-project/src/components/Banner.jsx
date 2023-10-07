export default function Banner() {
  return (
    <div className="text-white flex justify-center items-center flex-col pb-[186px]">
      <h1 className="text-[60px] pb-4 font-semibold">
        The best is right here!
      </h1>
      <p className="text-2xl pb-6 ">
        Blockbuster movies, hit series and exclusive originals. All in one
        place.
      </p>
      <p className="text-xl pb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="flex text-white">
        <label className="group text-white">
          <div className="w-56 relative group">
            <input
              type="text"
              id="Email"
              required
              className="w-[368px] h-[56px] px-4 translate-x-[-100px] text-[18px] peer bg-[rgb(0,0,0,0.2)] border rounded-[4px] border-[rgb(89,89,89)] outline-none"
            ></input>
            <label
              htmlFor="Email"
              className="transform translate-x-[-85px]  transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[18px] group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-0  group-focus-within:pl-0 peer-valid:pl-0"
            >
              Email
            </label>
          </div>
        </label>
        <div className="relative flex translate-x-[50px]">
          <button
            type="submit"
            className="px-[62px] pl-5 py-[12px] bg-red-600  rounded-[4px] text-2xl flex items-start font-bold"
          >
            Get Started
            <div className="absolute translate-x-[140px] translate-y-[4px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-mirrorinrtl="true"
                data-name="ChevronRight"
                aria-hidden="true"
              >
                <path
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
