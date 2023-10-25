import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useGlobalContext } from "../context";

import * as Yup from "yup";

const Signup = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { globalData } = useGlobalContext(); // Global bağlama erişimi
  const [isLabelClicked, setIsLabelClicked] = useState(false);

  {
    console.log("global:", globalData);
  }
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleLabelClick = () => {
    setIsLabelClicked(true);
    console.log(isLabelClicked);
  };

  const validation = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Enter an email"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/0ff5157d-6c35-4546-a844-5254b42bff8f/TR-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      ></img>
      <div className="absolute bg-black/60 top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[720px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font- mb-6">Sign Up</h1>
            <Formik
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                email: globalData,
                password: "",
              }}
              validationSchema={validation}
              onSubmit={(values) => {
                console.log("values", values);
              }}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col gap-y-3"
                >
                  <label
                    className={`absolute translate-y-[13px] translate-x-5 font-[300] transition-all text-zinc-400  ${
                      isInputFocused || values.email
                        ? "scale-[0.75] translate-x-[10px] translate-y-[2px]"
                        : "translate-x-4 translate-y-4"
                    } `}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className={`w-[314px] h-[50px] bg-[rgb(51,51,51)] outline-none rounded-[4px] px-5 ${
                      isInputFocused || values.email ? "pt-3" : ""
                    }`}
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                  <label
                    className={`absolute top-[59px] transition-all translate-x-5 font-[300] text-zinc-400 ${
                      isInputFocused || values.password
                        ? "scale-[0.75] translate-x-[8px] translate-y-[4px]"
                        : "translate-x-4 translate-y-4"
                    }`}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    className={`w-[314px] h-[50px] bg-[rgb(51,51,51)] outline-none rounded-[4px] px-5 ${
                      isInputFocused || values.password ? "pt-3" : ""
                    }`}
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="text-red-500">
                      {!errors.email && errors.password}
                    </div>
                  )}
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="w-[314px] h-[48px] text-white px-10 py-3 bg-red-600 rounded-[4px] mt-[30px]"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
