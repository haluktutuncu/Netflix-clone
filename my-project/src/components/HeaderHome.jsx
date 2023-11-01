import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCircleInfo,
  faPencil,
  faFaceSmile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { async } from "@firebase/util";

export default function HeaderHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const delayedCloseTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 1000);

    setTimeoutId(delayedCloseTimeout);
  };

  const handleMenuMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    const delayedCloseTimeout = setTimeout(() => {
      setMenuOpen(false);
    }, 1000);

    setTimeoutId(delayedCloseTimeout);
  };

  return (
    <div className=" w-full h-[68px] flex items-center justify-between bg-transparent text-[14px] font-[400] fixed z-50 bg-gradient-to-t from-transparent to to-black/50 ">
      <div className="flex items-start justify-center gap-[50px]">
        <Link to="/">
          <a
            href="#"
            className="ml-[30px] flex justify-center items-center fill-[rgb(210,47,39)]"
          >
            <svg
              viewBox="0 0 111 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="h-[30px] w-[92.5px] fill-[rgb(210,47,39)]"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </a>
        </Link>
        <ul className="flex gap-x-[15px]">
          <li>
            <a href="#">Main Menu</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">New and Popular</a>
          </li>
          <li>
            <a href="#">My list</a>
          </li>
          <li>
            <a href="#">Take a look by languages </a>
          </li>

          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-[16px] mr-[20px] ">
        <div className="flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="search-icon ltr-4z3qvp e1svuwfo1"
            data-name="MagnifyingGlass"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <a href="#">Kids</a>
        <div className="flex items-center justify-center translate-y-[5px]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Bell"
            aria-hidden="true"
          >
            <path
              d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center gap-x-2"
        >
          <img src="https://occ-0-778-1489.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"></img>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {(isOpen || menuOpen) && (
          <div
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
            className="bg-black/90 flex justify-center absolute translate-y-[140px] border-zinc-600 border-[1px] delay-200"
          >
            <ul className="text-[12px]">
              <li className="flex gap-x-3 items-center font-[200] hover:underline cursor-pointer pl-[20px] pr-[20px] ">
                <FontAwesomeIcon
                  className="w-[30px] h-[18px] text-zinc-300"
                  icon={faPencil}
                />
                <a className="py-[7px] w-[90px]" href="#">
                  Account Management
                </a>
              </li>
              <li className="flex gap-x-3 items-center font-[200] hover:underline cursor-pointer pl-[20px] pr-[20px]">
                <FontAwesomeIcon
                  className="w-[30px] h-[18px] text-zinc-300"
                  icon={faFaceSmile}
                />
                <a className="py-[7px] w-[90px]" href="#">
                  Switch Account
                </a>
              </li>
              <Link to="/account">
                <li className="flex gap-x-3 items-center font-[200] hover:underline cursor-pointer pl-[20px] pr-[20px]">
                  <FontAwesomeIcon
                    className="w-[30px] h-[18px] text-zinc-300"
                    icon={faUser}
                  />
                  <a className="py-[7px] w-[90px]" href="#">
                    Account
                  </a>
                </li>
              </Link>
              <li className="flex gap-x-3 items-center font-[200] hover:underline cursor-pointer pl-[20px] pr-[20px]">
                <FontAwesomeIcon
                  className="w-[30px] h-[18px] text-zinc-300"
                  icon={faCircleInfo}
                />
                <a className="py-[7px] w-[90px]" href="#">
                  Help
                </a>
              </li>
              <li>
                <div className="w-[200px] bg-zinc-400 h-[1px]"></div>
              </li>
              <Link to="/">
                <li className="flex items-center justify-center font-[200] hover:underline cursor-pointer  ">
                  <button
                    onClick={handleLogout}
                    className="py-[7px] w-[90px] "
                    href="#"
                  >
                    Log out
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
