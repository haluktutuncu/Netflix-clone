import { useFormik, Formik } from "formik";
import { useState } from "react";
import validate from "../Formikcom";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
      <form
        onSubmit={formik.handleSubmit}
        className="flex text-white translate-x-6 scale-90"
      >
        <div
          className={`relative w-[370px] h-[56px] ${
            isInputFocused || formik.values.email ? "pb-6" : "pb-0"
          }`}
        >
          <label
            htmlFor="email"
            className={`transform translate-x-[15px] text-[rgb(168,168,168)] transition-all absolute top-0 left-0 h-full flex items-center pl-2 ${
              isLabelClicked || isInputFocused || formik.values.email
                ? "text-[12px] translate-y-[-14px] translate-x-[3px]"
                : "pointer-events-none "
            }`}
          >
            Email Address
          </label>
          <input
            onClick={handleLabelClick}
            type="email"
            id="email"
            name="email"
            required
            onChange={formik.handleChange}
            onBlur={handleInputBlur}
            onFocus={() => {
              formik.handleFocus();
              handleInputFocus();
            }}
            value={formik.values.email}
            className="pt-[10px] w-[368px] h-[56px] px-4 text-[18px] bg-[rgb(0,0,0,0.2)] border rounded-[4px] border-[rgb(89,89,89)] outline-none"
          />
        </div>

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
    </Formik>
  );
}
