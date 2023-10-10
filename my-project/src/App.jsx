import Header from "./components/Header";
import Banner from "./components/Banner";
import Accordion from "./Accordion";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  return (
    <>
      <div className=" bg-hero-pattern h-full">
        <div className=" bg-no-repeat bg-cover w-full h-full bg bg-black/[40%]">
          <div className="bg-gradiente flex flex-col space-y-40">
            <Header />
            <Banner />
          </div>
        </div>
      </div>
      <Partone />
    </>
  );
}

function Partone() {
  const [list, setList] = useState([
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
    {
      question: "What is your name?",
      answer: "My name is Haluk?",
    },
  ]);
  return (
    <div className="w-full h-[526px] ">
      <div className="w-full h-[10px] bg-line"></div>
      <div className="flex justify-center bg-black">
        <div className="w-[510px] h-[382px] flex items-center flex-col justify-center bg-black text-white">
          <h2 className="text-[50px] mr-[100px] font-bold">Enjoy on your TV</h2>
          <p className="text-[25px] ml-[15px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="ilkpart w-[510px] h-[382px] bg-black">
          <video
            className="scale-[.70] absolute translate-y-[48px] translate-x-4 z-0"
            autoPlay
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          ></video>
          <img
            className=" scale-90 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          ></img>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="h-[544px] w-full flex justify-center bg-black py-[72px] px-[100px]">
        <div className="part1 w-[600px]">
          <video
            className="scale-[.78] absolute translate-y-[12px] translate-x-[55px] z-0"
            autoPlay
            muted
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          ></video>
          <img
            className="scale-100 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          ></img>
        </div>
        <div className="part2 flex flex-col justify-center w-[600px]  ">
          <h2 className="text-[50px] mr-[100px] font-bold text-white ">
            Watch everywhere
          </h2>
          <p className="text-[25px] ml-[15px] text-white p-[20px] translate-x-[-35px] ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV
          </p>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="flex justify-center bg-black">
        <div className="w-[510px] h-[382px] flex items-center flex-col justify-center bg-black text-white">
          <h2 className="text-[50px] mr-[100px] font-bold">Enjoy on your TV</h2>
          <p className="text-[25px] ml-[15px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="ilkpart w-[510px] h-[382px] bg-black">
          <img
            className=" scale-90 z-10"
            src="https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          ></img>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="h-[544px] w-full flex justify-center bg-black py-[72px] px-[100px]">
        <div className="part1 w-[600px]">
          <img
            className="scale-100 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          ></img>
          <div className=" flex  items-center gap-x-4 absolute w-[320px] h-[103px] bg-black border-gray-600 rounded-[12px] border-[2px] translate-x-[140px] translate-y-[-150px]  scale-90">
            <div>
              <img
                className="w-[57px] h-[80px] ml-[10px]"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center pl-[5px] w-[160px]  ">
              <h2 className="text-white font-bold text-[16px]">
                Stranger Things
              </h2>
              <p className="pr-[40px] text-blue-600 text-[12px]">
                Downloading...
              </p>
            </div>
            <div>
              <img
                className=" scale-75"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="gif"
              ></img>
            </div>
          </div>
        </div>
        <div className="part2 flex flex-col justify-center w-[600px]  ">
          <h2 className="text-[50px] mr-[100px] font-bold text-white ">
            Watch everywhere
          </h2>
          <p className="text-[25px] ml-[15px] text-white p-[20px] translate-x-[-35px] ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV
          </p>
        </div>
      </div>
      <div className="w-full h-[10px] bg-line"></div>
      <div className="bg-black h-[750px] w-full flex flex-col items-center justify-start">
        <div className="list flex items-center flex-col transition-all">
          <h1 className="font-bold text-[45px] text-white my-[40px] mb-[20px]">
            Frequently Asked Questions
          </h1>
          {list.map((item, key) => (
            <Accordion datas={item} key={key} />
          ))}

          <p className="text-white text-[20px] py-[20px] pt-[35px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex text-white translate-x-6 scale-90">
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
                  className="transform translate-x-[-85px] text-[rgb(168,168,168)]  transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[18px] group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-0  group-focus-within:pl-0 peer-valid:pl-0"
                >
                  Email Address
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
        <div className="w-full h-[10px] bg-line mt-[80px]"></div>
      </div>
      <Footer />
    </div>
  );
}
