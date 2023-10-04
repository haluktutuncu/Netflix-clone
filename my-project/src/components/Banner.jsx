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
      <form className="flex">
        <label className="group">
          <input
            type="text"
            className={`w-[354px] h-[56px] bg-black opacity-50 rounded-[4px] outline-none px-[12px] pl-[12px] border border-white `}
          ></input>
          <small
            className={
              " text-white transition-all absolute text-[16px] translate-x-[-340px] translate-y-[15px] input-text"
            }
          >
            Email address
          </small>
        </label>
        <div className="flex">
          <button
            type="submit"
            className="px-[62px] pl-5 py-[12px] bg-red-600 ml-6 rounded-[4px] text-2xl flex items-start font-bold"
          >
            Get Started
          </button>
          <div className="absolute translate-x-[180px] translate-y-[16px]">
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
        </div>
      </form>
    </div>
  );
}
