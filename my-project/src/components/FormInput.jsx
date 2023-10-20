/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormInput = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false);
  const [errorForm, setErrorForm] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleLabelClick = () => {
    setIsLabelClicked(true);
    console.log(isLabelClicked);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnChange={true}
      validateOnBlur={true}
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
        if (!values.email) {
          setErrorForm(true);
          console.log(errorForm);
        } else {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        submitForm,
        isValid,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Formun otomatik olarak gönderilmesini engelle
            if (Object.keys(errors).length === 0) {
              // Hata olmadığında sadece gönder
              submitForm();
            }
          }}
          className="flex text-white relative "
        >
          <label
            className={`absolute text-zinc-400  pointer-events-none -z-0 transition-all
            ${
              isInputFocused || values.email
                ? "scale-[0.75] translate-x-[1px] translate-y-[2px]"
                : "translate-x-4 translate-y-4"
            } 
            `}
          >
            Email Adress
          </label>
          <div className="gap-x-1 flex">
            <div
              className={` absolute border-2 w-[366px] h-[60px] translate-x-[-3px] translate-y-[-2px] rounded-md ${
                isInputFocused ? "" : "hidden"
              }`}
            ></div>
          </div>
          <input
            onBlur={() => setIsInputFocused(false)}
            onFocus={handleInputFocus}
            onClick={handleLabelClick}
            className={`min-w-[360px] h-[56px] bg-black/50 p-4 ${
              touched.email && errors.email
                ? "border-red-600"
                : "border-zinc-600"
            } border rounded-md focus:outline-none  ${
              isInputFocused || values.email ? "pt-7" : ""
            }`}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email && (
            <div
              className={`absolute translate-x-1 translate-y-14 text-[14px] flex items-center justify-center`}
            >
              <div>
                <svg
                  className="fill-[red] "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1"
                  data-name="CircleX"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                    fill="red"
                  ></path>
                </svg>
              </div>
              <p className="text-[red] pl-2">{errors.email}</p>
            </div>
          )}
          <div className="w-[209px] h-[56px]">
            {errors.email || !values.email ? (
              <button
                className={`bg-[red] w-full h-full ml-2 font-bold text-[25px] rounded-md flex items-center justify-center gap-x-2 transition-all hover:bg-red-700`}
                type="submit"
                onClick={() => {
                  setErrorForm(true);
                  console.log(errorForm);
                }}
              >
                <p className="text-center">Get Started</p>
                <svg
                  className="text-center"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  class="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="ChevronRight"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            ) : (
              <Link to="/signup">
                <button
                  className={`bg-[red] ml-2 w-full h-full font-bold text-[25px] rounded-md flex items-center justify-center gap-x-2 transition-all hover:bg-red-700`}
                  type="submit"
                >
                  <p className="text-center">Get Started</p>
                  <svg
                    className="text-center"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-mirrorinrtl="true"
                    class="default-ltr-cache-4z3qvp e1svuwfo1"
                    data-name="ChevronRight"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormInput;
