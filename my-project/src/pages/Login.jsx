import { Formik, Form, Field } from "formik";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { email } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const validation = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Enter an email"),
    password: Yup.string()
      .required("Your password must contain between 4 and 60 characters.")
      .min(4, "Password is too short - should be 8 chars minimum.")
      .max(60, "Password is too long - should be 60 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/0ff5157d-6c35-4546-a844-5254b42bff8f/TR-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      ></img>
      <div className="absolute bg-black/60 top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-8 z-50 translate-x-5 ">
        <svg
          className="fill-[rgb(210,47,39)] z-100 "
          viewBox="0 0 734 30"
          data-uia="netflix-logo"
          aria-hidden="true"
          focusable="false"
        >
          <g id="netflix-logo">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              id="Fill-14"
            ></path>
          </g>
        </svg>
        <div className="max-w-[450px] h-[620px] mx-auto bg-black/75 text-white translate-y-10">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font- mb-6">Sign In</h1>
            {error && (
              <div className=" flex items-center justify-center w-[314px] h-[54px] bg-[rgb(218,130,48)] text-white text-[16px] rounded-[4px] p-[25px] mb-[10px]">
                {error}
              </div>
            )}
            <Formik
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                email: email,
                password: "",
              }}
              validationSchema={validation}
              onSubmit={async (values) => {
                try {
                  await logIn(values.email, values.password);
                  navigate("/home");
                } catch (error) {
                  console.log(error);
                  setError(error.message);
                }
              }}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col gap-y-3"
                >
                  <div>
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
                      }
                    ${
                      errors.email
                        ? "border-b-[rgb(218,130,48)] border-b-[2.2px]"
                        : "outline-none"
                    }`}
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && (
                    <div className="text-[rgb(218,130,48)] -translate-y-2 translate-x-1 text-[12.5px]">
                      {errors.email}
                    </div>
                  )}
                  <div className="relative">
                    <label
                      className={`absolute translate-y-3 transition-all translate-x-5 font-[300] text-zinc-400 ${
                        isInputFocused || values.password
                          ? "scale-[0.75] translate-x-[8px] -translate-y-[0.8px] "
                          : "translate-x-4 translate-y-3"
                      }`}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      className={`w-[314px] h-[50px] bg-[rgb(51,51,51)] outline-none rounded-[4px] px-5 ${
                        isInputFocused || values.password ? "pt-3" : ""
                      } ${
                        errors.password
                          ? "border-b-[rgb(218,130,48)] border-b-[2.2px]"
                          : ""
                      }`}
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.password && (
                    <div className="text-[rgb(218,130,48)] -translate-y-2 translate-x-1 text-[12.5px]">
                      {errors.password}
                    </div>
                  )}
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="w-[314px] h-[48px] text-white px-10 py-3 bg-red-600 rounded-[4px] mt-[30px]"
                  >
                    Sign In
                  </button>
                  <div className="flex justify-between w-[310px] items-center ">
                    <div className="flex items-center gap-1">
                      <Field
                        className={`block w-4 h-4  accent-zinc-400`}
                        name="remember"
                        value="one"
                        type="checkbox"
                      ></Field>
                      <label
                        className="scale-[.80] -translate-x-2 text-zinc-500"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-[12px]">Need help</p>
                    </div>
                  </div>
                  <div className="mt-[60px] ">
                    <p className="text-zinc-500">
                      New to Netflix?{" "}
                      <span>
                        <Link to="/login">
                          <a className="text-white">Sign up now.</a>
                        </Link>
                      </span>
                    </p>
                    <p className="text-sm text-zinc-500 mt-[10px]">
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot.
                      <span>
                        <a className="text-blue-600 text-[12px]">Learn more</a>
                      </span>{" "}
                      .
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
