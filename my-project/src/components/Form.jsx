import { Formik } from "formik";
import { useState } from "react";

export default function Form() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsLabelClicked(false);
    console.log(isLabelClicked);
  };

  const handleLabelClick = () => {
    setIsLabelClicked(true);
    console.log(isLabelClicked);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,

        handleChange,
        handleSubmit,
        handleFocus,

        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex text-white translate-x-6 scale-90"
        >
          <div
            className={`relative w-[420px] h-[56px] translate-x-[-30px] ${
              isInputFocused || values.email ? "pb-6" : "pb-2"
            }`}
          >
            <label
              htmlFor="email"
              className={`transform translate-x-[15px] text-[rgb(168,168,168)] text-[18px] transition-all absolute top-0 left-0 h-full flex items-center pl-2 ${
                isLabelClicked || isInputFocused || values.email
                  ? " scale-75  translate-y-[-14px] translate-x-[-5px]"
                  : "pointer-events-none translate-y-[3px] "
              }`}
            >
              Email Address
            </label>
            <div
              className={` -z-10 absolute border-2 w-[408px] h-[70px] translate-x-[-4px] translate-y-[-3px] rounded-md ${
                isLabelClicked || isInputFocused || values.email ? "" : "hidden"
              }`}
            ></div>
            {console.log(isInputFocused, isLabelClicked, handleFocus)}
            <input
              onClick={handleLabelClick}
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              onBlur={handleInputBlur}
              onFocus={() => {
                handleFocus();
                handleInputFocus();
              }}
              value={values.email}
              className={`pt-[10px] w-[400px] h-[63px] px-4 text-[18px] bg-[rgb(0,0,0,0.2)] border rounded-[4px] ${
                !errors.email
                  ? "border-[rgb(89,89,89)]"
                  : "border-[rgb(166,27,27)]"
              }  outline-none`}
            />

            <span className="flex gap-x-2 items-center ml-1 mt-1 text-red-500">
              <div className={`${!errors.email && "hidden"}`}>
                {console.log(errors.email)}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1"
                  data-name="CircleX"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              {errors.email}
            </span>
          </div>

          <div className="relative flex translate-x-[-40px]">
            <button
              type="submit"
              className="px-[62px] pl-5 py-[15.5px] bg-red-600 hover:bg-red-800 transition-all  rounded-[4px] text-2xl flex items-start font-bold"
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
      )}
    </Formik>
  );
}
